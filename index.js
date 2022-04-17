const canvas = document.getElementById("canvasId");
const context = canvas.getContext("2d");
let board = [];

function drawCell() {
  context.clearRect(0, 0, 300, 300);
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (board[i][j] === 1) {
        context.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
}
canvas.onclick = function coordinatesCreator(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  x = Math.floor(x / 10);
  y = Math.floor(y / 10);
  board[y][x] = 1;
  drawCell();
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

function startLife() {
  const boardLife = [];
  for (let i = 0; i < 30; i++) {
    boardLife[i] = [];
    for (let j = 0; j < 30; j++) {
      const neighbours = 0;
      if (neighbours === 2 || neighbours === 3) {
        boardLife[i][j] = 1;
      } else {
        boardLife[i][j] = 0;
      }
    }
  }
  board = boardLife;
}

startLife();
const start = true;
document.getElementById("start").onclick = start;
