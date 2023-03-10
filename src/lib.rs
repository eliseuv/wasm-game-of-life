mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    // Imports `window.alert` from JS
    fn alert(s: &str);
}

// Exports the `greet` function to be called from JS code
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

extern crate web_sys;

// A `println!`-style macro to wrap `console.log` calls
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

// JS lib calls
extern crate js_sys;

// Cell representaion
#[wasm_bindgen]
#[repr(u8)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Cell {
    Dead = 0,
    Alive = 1,
}

// Game of life universe
#[wasm_bindgen]
pub struct Universe {
    width: u32,
    height: u32,
    state: Vec<Cell>,
}

// Common patterns
#[wasm_bindgen]
#[repr(u8)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Pattern {
    Glider,
    Pulsar,
}

fn get_template(pattern: Pattern) -> Vec<(u32, u32)> {
    match pattern {
        Pattern::Glider => vec![(2, 2), (2, 1), (2, 0), (1, 2), (0, 1)],
        Pattern::Pulsar => vec![
            (0, 3),
            (1, 3),
            (2, 3),
            (2, 2),
            (3, 2),
            (3, 1),
            (3, 0),
            (0, 6),
            (1, 6),
            (2, 6),
            (2, 7),
            (3, 7),
            (3, 8),
            (3, 9),
            (6, 0),
            (6, 1),
            (6, 2),
            (7, 2),
            (7, 3),
            (8, 3),
            (9, 3),
            (6, 9),
            (6, 8),
            (6, 7),
            (7, 7),
            (7, 6),
            (8, 6),
            (9, 6),
        ],
    }
}

impl Cell {
    // Toggle cell dead/alive
    fn toggle(&mut self) {
        *self = match *self {
            Cell::Dead => Cell::Alive,
            Cell::Alive => Cell::Dead,
        }
    }
}

// Methods accessible by JS
#[wasm_bindgen]
impl Universe {
    // Get width
    pub fn width(&self) -> u32 {
        self.width
    }

    // Set width
    pub fn set_width(&mut self, width: u32) {
        self.width = width;
        self.state = (0..width * self.height).map(|_i| Cell::Dead).collect();
    }

    // Get height
    pub fn height(&self) -> u32 {
        self.height
    }

    // Set width
    pub fn set_height(&mut self, height: u32) {
        self.height = height;
        self.state = (0..self.width * height).map(|_i| Cell::Dead).collect();
    }

    // Get pointer to state in WAS linear memory
    pub fn state(&self) -> *const Cell {
        self.state.as_ptr()
    }

    // Clear state
    pub fn clear(&mut self) {
        for cell in &mut self.state {
            *cell = Cell::Dead;
        }
    }

    // Randomize state
    pub fn randomize(&mut self, p: f64) {
        for cell in &mut self.state {
            *cell = if js_sys::Math::random() < p {
                Cell::Alive
            } else {
                Cell::Dead
            };
        }
    }

    // Toggle a cell dead/alive
    pub fn toggle_cell(&mut self, row: u32, col: u32) {
        let idx = self.get_index(row, col);
        self.state[idx].toggle();
    }

    // Add pattern
    pub fn add_pattern(&mut self, pattern: Pattern, row_center: u32, col_center: u32) {
        let template: Vec<(u32, u32)> = get_template(pattern)
            .iter()
            .map(|(y, x)| {
                (
                    (row_center + y + self.height) % self.height,
                    (col_center + x + self.width) % self.width,
                )
            })
            .collect();
        for (row, col) in template {
            let idx = self.get_index(row, col);
            self.state[idx] = Cell::Alive;
        }
    }

    // Update the whole universe
    pub fn tick(&mut self) {
        // New state
        let mut state_next = self.state.clone();

        for row in 0..self.height {
            for col in 0..self.width {
                let idx = self.get_index(row, col);
                let cell = self.state[idx];
                let live_neighbors = self.live_neighbor_count(row, col);

                let cell_next = match (cell, live_neighbors) {
                    // Rule 1: Starvation
                    (Cell::Alive, x) if x < 2 => Cell::Dead,
                    // Rule 2: Continuation
                    // (Cell::Alive, 2) | (Cell::Alive, 3) => Cell::Alive,
                    // Rule 3: Overpopulation
                    (Cell::Alive, x) if x > 3 => Cell::Dead,
                    // Rule 4: Reproduction
                    (Cell::Dead, 3) => Cell::Alive,
                    // All other cells remain in the same state
                    (state, _) => state,
                };

                // Store to temp state
                state_next[idx] = cell_next;
            }
        }

        // Update system state
        self.state = state_next;
    }

    // Constructor set state
    pub fn new(width: u32, height: u32, cell_state: Option<Cell>) -> Universe {
        // Initialize panic hool
        utils::set_panic_hook();

        let state = (0..width * height)
            .map(|_i| cell_state.unwrap_or(Cell::Dead))
            .collect();

        Universe {
            width,
            height,
            state,
        }
    }

    // Simple render method
    pub fn render(&self) -> String {
        self.to_string()
    }
}

use std::fmt;

impl fmt::Display for Universe {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        for line in self.state.as_slice().chunks(self.width as usize) {
            for &cell in line {
                let symbol = if cell == Cell::Dead { '◻' } else { '◼' };
                write!(f, "{}", symbol)?;
            }
            write!(f, "\n")?;
        }
        Ok(())
    }
}

// Methods NOT accessible by JS
impl Universe {
    // Access cells in the linear array (row-major)
    fn get_index(&self, row: u32, col: u32) -> usize {
        (row * self.width + col) as usize
    }

    // Calculate the number of live neighbors of a given cell
    fn live_neighbor_count(&self, row: u32, col: u32) -> u8 {
        let mut count = 0;
        for delta_row in [self.height - 1, 0, 1].iter().cloned() {
            for delta_col in [self.height - 1, 0, 1].iter().cloned() {
                if delta_row == 0 && delta_col == 0 {
                    continue;
                }
                let neighbor_row = (row + delta_row) % self.height;
                let neighbor_col = (col + delta_col) % self.width;
                let idx = self.get_index(neighbor_row, neighbor_col);
                count += self.state[idx] as u8;
            }
        }
        count
    }

    // Get state
    pub fn get_state(&self) -> &[Cell] {
        &self.state
    }

    pub fn set_cells(&mut self, cells: &[(u32, u32)]) {
        for (row, col) in cells.iter().cloned() {
            let idx = self.get_index(row, col);
            self.state[idx] = Cell::Alive;
        }
    }
}
