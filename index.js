class GridOfCells {
  status = 0;
  positionX;
  positionY;

  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
  }
}
const board = [];
const row = 6;
const column = 6;
const cell = 0;

const gameStart = () => {
  for (let positionX = 0; positionX < row; positionX++) {
    board.push([]);
    for (let positionY = 0; positionY < column; positionY++) {
      board[row].push = new GridOfCells(positionX, positionY);
    }
  }
};
gameStart();

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

// if a living cell has more than three neighbors, it dies
// if a living cell has less than three neighbors, it dies
// if a dead cell has exactly three neighbors — it comes to life
// in other cases, the cell remains in its state
