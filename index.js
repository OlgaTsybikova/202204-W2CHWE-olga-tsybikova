const canvas = document.getElementById("canvasId");
const ctx = canvas.getContext("2d");
let cell = [];

function drawField() {
  ctx.clearRect(0, 0, 300, 300);
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (cell[i][j] === 1) {
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
}

canvas.onclick = function cellCoordinates(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  x = Math.floor(x / 10); // 300 /10 = 30
  y = Math.floor(y / 10);
  cell[y][x] = 1;

  drawField();
};

function goLife() {
  const n = 30;
  const m = 30;
  for (let i = 0; i < m; i++) {
    cell[i] = [];
    for (let j = 0; j < n; j++) {
      cell[i][j] = 0;
    }
  }
}
goLife();

function goOutIfMeetLimit(i) {
  if (i === 0) {
    return 30;
  }
  return i;
}

function startLife() {
  // моделирование жизни
  const cellLife = [];
  for (let i = 0; i < 30; i++) {
    cellLife[i] = [];
    for (let j = 0; j < 30; j++) {
      let neighbors = 0;
      if (cell[goOutIfMeetLimit(i) - 1][j] === 1) {
        neighbors++;
      } else if (cell[i][goOutIfMeetLimit(j) + 1] === 1) {
        neighbors++;
      } else if (cell[i][goOutIfMeetLimit(j) - 1] === 1) {
        neighbors++; // left
      } else if (cell[goOutIfMeetLimit(i) - 1][goOutIfMeetLimit(j) - 1] === 1) {
        neighbors++;
      } else if (neighbors === 2 || neighbors === 3) {
        cellLife[i][j] = 1;
      }
      cellLife[i][j] = 0;
    }
  }
  cell = cellLife;
  drawField();
}

document.getElementById("start").onclick = startLife;
