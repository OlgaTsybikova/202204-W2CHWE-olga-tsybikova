const canvas = document.getElementById("box");
const ctx = canvas.getContext("2d");
let cell = [];
const count = 0;

function drawCell() {
  ctx.clearRect(0, 0, 300, 300);
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (cell[i][j] === 1) {
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
}

canvas.onclick = function coordinatesCell(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  x = Math.floor(x / 10); // 300 /10 = 30
  y = Math.floor(y / 10);
  cell[y][x] = 1;
  drawCell();
};

function goLife() {
  const row = 30;
  const column = 30;
  for (let i = 0; i < column; i++) {
    cell[i] = [];
    for (let j = 0; j < row; j++) {
      cell[i][j] = 0;
    }
  }
}
goLife();

function whenCellgoesOverTheLimit(i) {
  if (i === 0) return 30;
  return i;
}
function whenCellgoesOverTheLimitToo(i) {
  if (i === 29) return -1;
  return i;
}

function startLife() {
  const cellLive = [];
  for (let i = 0; i < 30; i++) {
    cellLive[i] = [];
    for (let j = 0; j < 30; j++) {
      let neighbors = 0;
      if (cell[whenCellgoesOverTheLimit(i) - 1][j] === 1) {
        neighbors++; // up
      }
      if (cell[i][whenCellgoesOverTheLimitToo(j) + 1] === 1) {
        neighbors++; // right
      }
      if (cell[whenCellgoesOverTheLimitToo(i) + 1][j] === 1) {
        neighbors++; // bottom
      }
      if (cell[i][whenCellgoesOverTheLimit(j) - 1] === 1) {
        neighbors++;
      }
      if (
        cell[whenCellgoesOverTheLimit(i) - 1][
          whenCellgoesOverTheLimitToo(j) + 1
        ] === 1
      ) {
        neighbors++;
      }
      if (
        cell[whenCellgoesOverTheLimitToo(i) + 1][
          whenCellgoesOverTheLimitToo(j) + 1
        ] === 1
      ) {
        neighbors++;
      }
      if (
        cell[whenCellgoesOverTheLimitToo(i) + 1][
          whenCellgoesOverTheLimit(j) - 1
        ] === 1
      ) {
        neighbors++;
      }
      if (
        cell[whenCellgoesOverTheLimit(i) - 1][
          whenCellgoesOverTheLimit(j) - 1
        ] === 1
      ) {
        neighbors++;
      }
      // eslint-disable-next-line no-unused-expressions
      neighbors === 2 || neighbors === 3
        ? (cellLive[i][j] = 1)
        : (cellLive[i][j] = 0);
    }
  }
  cell = cellLive;
  drawCell();
  document.getElementById("count").innerHTML = count;
}

document.getElementById("start").onclick = startLife;
