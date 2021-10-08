const boardGame = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

let contadorVivos;
let contadorMuertos;

function chequeandoVecinos(matriz) {
  contadorVivos = 0;
  for (let x = 0; x < boardGame.length; x++) {
    for (let y = 0; y < boardGame[x].length; y++) {
      if (boardGame[0][0] === 1) {
        esquinaA();
        /* if (boardGame[x - 1][y - 1] === 1) {
          contadorVivos++;
        }
        if (boardGame[x - 1][y] === 1) {
          contadorVivos++;
        }
        if (boardGame[x - 1][y + 1] === 1) {
          contadorVivos++;
        }
        if (boardGame[x][y - 1] === 1) {
          contadorVivos++;
        }
        if (boardGame[x][y + 1] === 1) {
          contadorVivos++;
        }
        if (boardGame[x + 1][y - 1] === 1) {
          contadorVivos++;
        }
        if (boardGame[x + 1][y] === 1) {
          contadorVivos++;
        }
        if (boardGame[x + 1][y + 1] === 1) {
          contadorVivos++;
        } */
      }
    }
  }
  console.log(boardGame);
}
chequeandoVecinos(matriz);

function esquinaIzquierdaSuperior() {
  if (boardGame[x][y + 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x + 1][y + 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x + 1][y] === 1) {
    contadorVivos++;
  }
  if (boardGame[x][y + 1] === 0) {
    contadorMuertos++;
  }

  if (boardGame[x + 1][y + 1] === 0) {
    contadorMuertos++;
  }

  if (boardGame[x + 1][y] === 0) {
    contadorMuertos++;
  }
}

function esquinaIzquierdaInferior() {
  if (boardGame[x - 1][y] === 1) {
    contadorVivos++;
  }

  if (boardGame[x - 1][y + 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x][y + 1] === 1) {
    contadorVivos++;
  }
  if (boardGame[x - 1][y] === 0) {
    contadorMuertos++;
  }

  if (boardGame[x - 1][y + 1] === 0) {
    contadorMuertos++;
  }

  if (boardGame[x][y + 1] === 0) {
    contadorMuertos++;
  }
}

function esquinaDerechaSuperior() {
  if (boardGame[x][y - 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x + 1][y - 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x + 1][y] === 1) {
    contadorVivos++;
  }
  if (boardGame[x][y - 1] === 0) {
    contadorMuertos++;
  }

  if (boardGame[x + 1][y - 1] === 0) {
    contadorMuertos++;
  }

  if (boardGame[x + 1][y] === 0) {
    contadorMuertos++;
  }
}

function esquinaDerechaInferior() {
  if (boardGame[x - 1][y] === 1) {
    contadorVivos++;
  }

  if (boardGame[x - 1][y - 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x][y - 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x - 1][y] === 0) {
    contadorMuertos++;
  }

  if (boardGame[x - 1][y - 1] === 0) {
    contadorMuertos++;
  }

  if (boardGame[x][y - 1] === 0) {
    contadorMuertos++;
  }
}
