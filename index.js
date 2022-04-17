const canvas = document.getElementById("canvasId");
const context = canvas.getContext("2d");
let cell = [];

function drawCell() {
  context.clearRect(0, 0, 300, 300);
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (cell[i][j] === 1) {
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
  cell[y][x] = 1;
  drawCell();
};

function gameBoard() {
  const row = 30;
  const column = 30;
  for (let i = 0; i < row; i++) {
    cell[i] = [];
    for (let j = 0; j < column; j++) {
      cell[i][j] = 0;
    }
  }
}
gameBoard();

function startLife() {
  const cellLife = [];
  for (let i = 0; i < 30; i++) {
    cellLife[i] = [];
    for (let j = 0; j < 30; j++) {
      let neighbours = 0;
      if (cellLife[i][j] === undefined) {
        neighbours++;
      }
      if (neighbours === 2 || neighbours === 3) {
        cellLife[i][j] = 1;
      } else {
        cellLife[i][j] = 0;
      }
    }
  }
  cell = cellLife;
}
drawCell();

document.getElementById("start").onclick = startLife();
