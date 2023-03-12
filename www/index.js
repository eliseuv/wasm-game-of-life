import { memory } from 'wasm-game-of-life/wasm_game_of_life_bg'
import { Universe, Cell, Pattern } from "wasm-game-of-life"

// Construct universe
const nrows = 206;
const ncols = 128;
const universe = Universe.new(nrows, ncols);

// Some aesthetics
const CELL_SIZE = 7; // px
const GRID_COLOR = "#303030";
const ALIVE_COLOR = "#ffffff";
const DEAD_COLOR = "#000000";

// Create canvas
const canvas = document.getElementById("game-of-life-canvas");
canvas.height = (CELL_SIZE + 1) * nrows + 1;
canvas.width = (CELL_SIZE + 1) * ncols + 1;

const ctx = canvas.getContext('2d');

const drawGrid = () => {
    ctx.beginPath();
    ctx.strokeStyle = GRID_COLOR;

    // Vertical lines.
    for (let i = 0; i <= ncols; i++) {
        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * nrows + 1);
    }

    // Horizontal lines.
    for (let j = 0; j <= nrows; j++) {
        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
        ctx.lineTo((CELL_SIZE + 1) * nrows + 1, j * (CELL_SIZE + 1) + 1);
    }

    ctx.stroke();
};

const getIndex = (row, col) => {
    return row * ncols + col;
};

const drawCells = () => {
    const statePtr = universe.state();
    const state = new Uint8Array(memory.buffer, statePtr, nrows * ncols);

    ctx.beginPath();

    for (let row = 0; row < nrows; row++) {
        for (let col = 0; col < ncols; col++) {
            const idx = getIndex(row, col);

            ctx.fillStyle = state[idx] === Cell.Dead
                ? DEAD_COLOR
                : ALIVE_COLOR;

            ctx.fillRect(
                col * (CELL_SIZE + 1) + 1,
                row * (CELL_SIZE + 1) + 1,
                CELL_SIZE,
                CELL_SIZE
            );
        }
    }

    ctx.stroke();
};

// We keep track fo the identifier returned by the `requestAnimationFrame`
let animationId = null;

// Tell if the animation is paused
const isPaused = () => {
    return animationId == null;
}

// Recursive loop to render
const renderLoop = () => {

    universe.tick();

    drawCells();

    animationId = requestAnimationFrame(renderLoop);
};

// Play/Pause button
const playPauseButton = document.getElementById("play-pause-button");

// Play action
const play = () => {
    playPauseButton.textContent = "⏸";
    renderLoop();
};

// Pause action
const pause = () => {
    playPauseButton.textContent = "▶";
    cancelAnimationFrame(animationId);
    animationId = null;
};

// On click event
playPauseButton.addEventListener("click", event => {
    if (isPaused()) {
        play();
    } else {
        pause();
    }
});

// Probability slider
const pSlider = document.getElementById("pSlider");
const pValue = document.getElementById("pValue");
pValue.textContent = pSlider.value;
pSlider.addEventListener("input", (event) => {
    pValue.textContent = event.target.value
    universe.randomize(pSlider.value)
});

// Randomize button
const randomizeButton = document.getElementById("randomize-button");
randomizeButton.textContent = "Random";
randomizeButton.addEventListener("click", event => {
    universe.randomize(pSlider.value);
    drawCells();
});

// Clear button
const clearButton = document.getElementById("clear-button");
clearButton.textContent = "Clear"
clearButton.addEventListener("click", event => {
    universe.clear();
    drawCells();
});

// Click on canvas to toggle cell
canvas.addEventListener("click", event => {

    const boundingRect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / boundingRect.width;
    const scaleY = canvas.height / boundingRect.height;

    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
    const canvasTop = (event.clientY - boundingRect.top) * scaleY;

    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), nrows - 1);
    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), ncols - 1);

    if (event.ctrlKey) {

        universe.add_pattern(Pattern.Glider, row, col);

    } else if (event.shiftKey) {

        universe.add_pattern(Pattern.Pulsar, row, col);

    } else {

        universe.toggle_cell(row, col);

    }

    drawCells();
});

// Set initial state
function init() {


    // Start paused
    pause();

    // Initial conditions
    pSlider.value = 0.5
    universe.randomize(pSlider.value);

    // Initial draw
    drawGrid();
    drawCells();


    play();

}

init();
