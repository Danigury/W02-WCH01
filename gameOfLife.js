

function Game(tablero) {
  const tablero2 = Array(dimensiones)
    .fill(0)
    .map(() => Array(dimensiones).fill(0));


 for (let x = 0; x < dimensiones; x++) {
    for (let y = 0; y < dimensiones; y++) {
      let contador = 0;
      if (x === 0) {
        if (y === 0) {
          contador += tablero[0][1];
          contador += tablero[1][0];
          contador += tablero[1][1];
          auxTable[x][y] = paint(tablero[x][y], contador);
        } else if (y > 0 && y < dimensiones - 1) {
          contador += tablero[0][y + 1];
          contador += tablero[0][y - 1];
          contador += tablero[1][y];
          contador += tablero[1][y + 1];
          contador += tablero[1][y - 1];
          auxTable[x][y] = paint(tablero[x][y], contador);
        } else if (y === dimensiones - 1) {
          contador += tablero[0][dimensiones - 2];
          contador += tablero[1][dimensiones - 1];
          contador += tablero[1][dimensiones - 2];
          auxTable[x][y] = paint(tablero[x][y], contador);
        }
      } else if (x === dimensiones - 1) {
        if (y === 0) {
          contador += tablero[dimensiones - 1][1];
          contador += tablero[dimensiones - 2][0];
          contador += tablero[dimensiones - 2][1];
          auxTable[x][y] = paint(tablero[x][y], contador);
        } else if (y > 0 && y < dimensiones - 1) {
          contador += tablero[dimensiones - 1][y + 1];
          contador += tablero[dimensiones - 1][y - 1];
          contador += tablero[dimensiones - 2][y];
          contador += tablero[dimensiones - 2][y + 1];
          contador += tablero[dimensiones - 2][y - 1];
          auxTable[x][y] = paint(tablero[x][y], contador);
        } else if (y === dimensiones - 1) {
          contador += tablero[dimensiones - 1][dimensiones - 2];
          contador += tablero[dimensiones - 2][dimensiones - 1];
          contador += tablero[dimensiones - 2][dimensiones - 2];
          auxTable[x][y] = paint(tablero[x][y], contador);
        }
      } else if (y === 0) {
        contador += tablero[x - 1][0];
        contador += tablero[x + 1][0];
        contador += tablero[x - 1][1];
        contador += tablero[x][1];
        contador += tablero[x + 1][1];
        auxTable[x][y] = paint(tablero[x][y], contador);
      } else if (y === dimensiones - 1) {
        contador += tablero[x - 1][dimensiones - 1];
        contador += tablero[x + 1][dimensiones - 1];
        contador += tablero[x - 1][dimensiones - 2];
        contador += tablero[x][dimensiones - 2];
        contador += tablero[x + 1][dimensiones - 2];
        auxTable[x][y] = paint(tablero[x][y], contador);
      } else {
        contador += tablero[x - 1][y - 1];
        contador += tablero[x - 1][y];
        contador += tablero[x - 1][y + 1];
        contador += tablero[x][y - 1];
        contador += tablero[x][y + 1];
        contador += tablero[x + 1][y - 1];
        contador += tablero[x + 1][y];
        contador += tablero[x + 1][y + 1];
        auxTable[x][y] = paint(tablero[x][y], contador);
      }
    }
  }
/*
function chequeandoVecinos(matriz) {
  const contadorVivos = 0;
  const contadorMuertos = 0;
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

      centro();
    }
  }
  console.log;
}

function centro() {
  let contadorVivos = 0;
  let contadorMuertos = 0;

  if (boardGame[x - 1][y - 1] === 1) {
    contadorVivos++;
  }

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

  if (boardGame[x + 1][y - 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x][y - 1] === 1) {
    contadorVivos++;
  }

  if (boardGame[x - 1][y - 1] === 0) {
    contadorMuertos++;
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

  if (boardGame[x + 1][y - 1] === 0) {
    contadorMuertos++;
  }

  if (boardGame[x][y - 1] === 0) {
    contadorMuertos++;
  }
}

function esquinaIzquierdaSuperior() {
  let contadorVivos = 0;
  let contadorMuertos = 0;

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
  let contadorVivos = 0;
  let contadorMuertos = 0;

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
  let contadorVivos = 0;
  let contadorMuertos = 0;

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
  let contadorVivos = 0;
  let contadorMuertos = 0;

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
  let contadorVivos = 0;
  let contadorMuertos = 0;

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
  let contadorVivos = 0;
  let contadorMuertos = 0;

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
  let contadorVivos = 0;
  let contadorMuertos = 0;

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
  let contadorVivos = 0;
  let contadorMuertos = 0;

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
*/