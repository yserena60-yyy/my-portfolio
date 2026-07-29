/**
 * Project: Digital Loom - Weaving the Binary Soul of Algorithms
 * Concept: Translating Conway's Game of Life into a Cross-Stitch Aesthetic
 */

let grid;
let cols;
let rows;
let resolution = 15; // Size of each stitch grid
let osc; // Audio Oscillator

function setup() {
  // 1. Create a canvas that fits the weaving metaphor
  createCanvas(800, 600);
  
  // 2. Calculate columns and rows as integers to prevent RangeErrors
  cols = Math.floor(width / resolution);
  rows = Math.floor(height / resolution);

  // 3. Robustness check for grid dimensions
  if (cols <= 0 || rows <= 0) {
    console.error("Resolution is too high or canvas is too small.");
    return;
  }

  // 4. Initialize the grid with empty "threads"
  grid = create2DArray(cols, rows);
  
  // 5. Initialize Sound (Requires user interaction to start in modern browsers)
  try {
    osc = new p5.Oscillator('sine');
    osc.amp(0);
    osc.start();
  } catch (e) {
    console.log("Audio initialization deferred until user interaction.");
  }

  frameRate(10); // Slower frame rate to mimic the deliberate pace of manual weaving
}

function draw() {
  background(40, 30, 30); // Warm, fabric-like dark background

  if (!grid) return; // Guard clause

  // --- VISUAL RENDERING: THE DIGITAL STITCH ---
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      
      // Draw the background "Warp and Weft" grid
      stroke(60, 50, 50);
      strokeWeight(1);
      noFill();
      rect(x, y, resolution, resolution);

      // If a cell is "Alive," render it as a Cross-Stitch 'X'
      if (grid[i][j] === 1) {
        stroke(200, 100, 100); // Thread color
        strokeWeight(2);
        // The 'X' Shape
        line(x + 2, y + 2, x + resolution - 2, y + resolution - 2);
        line(x + resolution - 2, y + 2, x + 2, y + resolution - 2);
        
        // Add a central highlight to simulate silk thread sheen
        stroke(255, 150, 150, 50);
        strokeWeight(4);
        point(x + resolution/2, y + resolution/2);
      }
    }
  }

  // --- LOGIC: GENERATIVE EVOLUTION ---
  let next = create2DArray(cols, rows);
  let liveCount = 0;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      let neighbors = countNeighbors(grid, i, j);

      // Conway's Rules applied to the Loom
      if (state === 0 && neighbors === 3) {
        next[i][j] = 1; // Reproduction / New Stitch
      } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0; // Death / Thread Decay
      } else {
        next[i][j] = state; // Stasis
      }
      
      if (next[i][j] === 1) liveCount++;
    }
  }

  grid = next;

  // --- MULTI-MODAL: DATA SONIFICATION ---
  if (osc && liveCount > 0) {
    // Map stitch density to pitch (redundancy vs innovation)
    let targetFreq = map(liveCount, 0, (cols * rows) / 4, 100, 800);
    osc.freq(targetFreq, 0.1);
    osc.amp(0.1, 0.1);
  } else if (osc) {
    osc.amp(0, 0.1);
  }
}

// Helper: Create a stable 2D array
function create2DArray(c, r) {
  let arr = new Array(c);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(r).fill(0);
  }
  return arr;
}

// Helper: Count neighbors with Toroidal (Wrap-around) logic
function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      // Modulo arithmetic creates the "Infinite Loom" effect
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

// --- INTERACTION: HUMAN-MACHINE CO-CREATION ---
function mouseDragged() {
  let i = Math.floor(mouseX / resolution);
  let j = Math.floor(mouseY / resolution);
  if (i >= 0 && i < cols && j >= 0 && j < rows) {
    grid[i][j] = 1; // "Sewing" new cells manually
  }
}

function mousePressed() {
  if (typeof userStartAudio === 'function') {
    userStartAudio(); // Required by p5.sound
  }
  mouseDragged();
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    grid = create2DArray(cols, rows); // Clear the loom
  } else if (key === 'r' || key === 'R') {
    // Randomize: The "Innovation" state
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = floor(random(2));
      }
    }
  }
}