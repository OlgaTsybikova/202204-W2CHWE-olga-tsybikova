const canvas = document.getElementById("canvasId");
const context = canvas.getContext("2d");
const board = [];

canvas.onclick = function (event) {
  let x = event.offsetX;
  let y = event.offsetY;
  console.log(x);
  console.log(y);
  x = Math.floor(x / 10);
  y = Math.floor(y / 10);
  board[y][x] = 1;
  console.log(board);
};

function gameBoard() {
  const row = 30;
  const column = 30;
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i][j] = 0;
    }
  }
}
gameBoard();

/* const neighbour = 0;
if (neighbour >= 3) {
  cell.status = 0;
} else if (neighbour < 3) {
  cell.status = 1;
} else if (cell.status === 1) {
  cell.status = 0;
} else {
  cell.status = 1;
} */

// if a living cell has more than three neighbors, it dies
// if a living cell has less than three neighbors, it dies
// if a dead cell has exactly three neighbors — it comes to life
// in other cases, the cell remains in its state
