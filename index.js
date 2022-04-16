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

const game = new GridOfCells(0, 1, 0);
