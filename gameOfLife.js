const boardGame = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
/*
function game() {
  for (let x = 0; x < boardGame.length; x++) {
    for (let y = 0; y < boardGame[x].length; y++) {
      if (boardGame[x][y] === 1) {
        boardGame[x][y] = 3;
      }
    }
  }
  console.log(boardGame);
}
game();
*/

let contador;

function chequeandoVecinos() {
  contador = 0;
  for (let x = 0; x < boardGame.length; x++) {
    for (let y = 0; y < boardGame[x].length; y++) {
      if (boardGame[x][y] === 1) {
        if (boardGame[x - 1][y - 1] === 1) {
          contador++;
        }
        if (boardGame[x - 1][y] === 1) {
          contador++;
        }
        if (boardGame[x - 1][y + 1] === 1) {
          contador++;
        }
        if (boardGame[x][y - 1] === 1) {
          contador++;
        }
        if (boardGame[x][y + 1] === 1) {
          contador++;
        }
        if (boardGame[x + 1][y - 1] === 1) {
          contador++;
        }
        if (boardGame[x + 1][y] === 1) {
          contador++;
        }
        if (boardGame[x + 1][y + 1] === 1) {
          contador++;
        }
      }
    }
  }
  console.log(boardGame);
}
chequeandoVecinos();
