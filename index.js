const board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
class GridOfCells {
  status = 0;
  x;
  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const cell = new GridOfCells(0, 0);
const neighbour = 0;

if (neighbour >= 3) {
  cell.status = 0;
} else if (neighbour < 3) {
  cell.status = 1;
} else if (cell.status === 1) {
  cell.status = 0;
} else {
  cell.status = 1;
}

board();

// if a living cell has more than three neighbors, it dies
// if a living cell has less than three neighbors, it dies
// if a dead cell has exactly three neighbors — it comes to life
// in other cases, the cell remains in its state
