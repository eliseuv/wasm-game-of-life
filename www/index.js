import { memory } from 'wasm-game-of-life/wasm_game_of_life_bg'
import { Universe, Cell, Pattern } from "wasm-game-of-life"

// Construct universe
const width = 128;
const height = 128;
const universe = Universe.new(width, height);

// Some aesthetics
const CELL_SIZE = 7; // px
const GRID_COLOR = "#303030";
const ALIVE_COLOR = "#ffffff";
const DEAD_COLOR = "#000000";

// Create canvas
const canvas = document.getElementById("game-of-life-canvas");
canvas.width = (CELL_SIZE + 1) * width + 1;
canvas.height = (CELL_SIZE + 1) * height + 1;

const ctx = canvas.getContext('2d');

const drawGrid = () => {
    ctx.beginPath();
    ctx.strokeStyle = GRID_COLOR;

    // Vertical lines.
    for (let i = 0; i <= width; i++) {
        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
    }

    // Horizontal lines.
    for (let j = 0; j <= height; j++) {
        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
    }

    ctx.stroke();
};

const getIndex = (row, column) => {
    return row * width + column;
};

const drawCells = () => {
    const statePtr = universe.state();
    const state = new Uint8Array(memory.buffer, statePtr, width * height);

    ctx.beginPath();

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
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

    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);
    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);

    if (event.ctrlKey) {

        universe.add_pattern(Pattern.Glider, row, col);

    } else if (event.shiftKey) {

        universe.add_pattern(Pattern.Pulsar, row, col);

    } else {

        universe.toggle_cell(row, col);

    }

    drawCells();
});

// Start paused
pause();

// Initial draw
drawGrid();
drawCells();


// Initial conditions
universe.randomize(pSlider.value);
play();
