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
        esquinaIzquierdaSuperior();
      }

      if (boardGame[0][4] === 1) {
        esquinaDerechaSuperior();
      }

      if (boardGame[4][4] === 1) {
        esquinaDerechaInferior();
      }

      if (boardGame[4][0] === 1) {
        esquinaIzquierdaInferior();
      }

      if (
        boardGame[0][1] === 1 ||
        boardGame[0][2] === 1 ||
        boardGame[0][3] === 1
      ) {
        bordeSuperior();
      }

      if (
        boardGame[1][4] === 1 ||
        boardGame[2][4] === 1 ||
        boardGame[3][4] === 1
      ) {
        bordeDerecho();
      }

      if (
        boardGame[4][1] === 1 ||
        boardGame[4][2] === 1 ||
        boardGame[4][3] === 1
      ) {
        bordeInferior();
      }

      if (
        boardGame[1][0] === 1 ||
        boardGame[2][0] === 1 ||
        boardGame[3][0] === 1
      ) {
        bordeIzquierdo();
      }
    }
  }
}

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

function bordeSuperior() {
  if (boardGame[x][y - 1] === 1) {
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
  }

  if (boardGame[x][y + 1] === 1) {
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

  if (boardGame[x + 1][y + 1] === 0) {
    contadorMuertos++;
  }

  if (boardGame[x][y + 1] === 0) {
    contadorMuertos++;
  }
}

function bordeDerecho() {
  if (boardGame[x - 1][y] === 1) {
    contadorVivos++;
  }

  if (boardGame[x - 1][y + 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x][y + 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x + 1][y + 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x + 1][y] === 1) {
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

  if (boardGame[x + 1][y + 1] === 0) {
    contadorMuertos++;
  }

  if (boardGame[x + 1][y] === 0) {
    contadorMuertos++;
  }
}

function bordeInferior() {
  if (boardGame[x][y - 1] === 1) {
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
  }

  if (boardGame[x][y + 1] === 1) {
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

  if (boardGame[x + 1][y + 1] === 0) {
    contadorMuertos++;
  }

  if (boardGame[x][y + 1] === 0) {
    contadorMuertos++;
  }
}

function bordeIzquierdo() {
  if (boardGame[x - 1][y] === 1) {
    contadorVivos++;
  }

  if (boardGame[x - 1][y + 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x][y + 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x + 1][y + 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x + 1][y] === 1) {
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

  if (boardGame[x + 1][y + 1] === 0) {
    contadorMuertos++;
  }

  if (boardGame[x + 1][y] === 0) {
    contadorMuertos++;
  }
}

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
