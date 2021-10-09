const dimensionesTablero = 5;
const tableroOriginal = Array(dimensionesTablero)
  .fill(0)
  .map(() => Array(dimensionesTablero).fill(0));

function juego(tablero) {
  const creadorTablero = Array(dimensionesTablero)
    .fill(0)
    .map(() => Array(dimensionesTablero).fill(0));

  for (let x = 0; x < tablero.length; x++) {
    for (let y = 0; y < tablero[x].length; y++) {
      let contador = 0;
      if (tablero[x + 1] !== undefined) {
        if (tablero[x + 1][y] === 1) contador++;
        if (tablero[x + 1][y - 1] === 1) contador++;
        if (tablero[x + 1][y + 1] === 1) contador++;
      }
      if (tablero[x][y - 1] === 1) contador++;
      if (tablero[x][y + 1] === 1) contador++;
      if (tablero[x - 1] !== undefined) {
        if (tablero[x - 1][y] === 1) contador++;
        if (tablero[x - 1][y - 1] === 1) contador++;
        if (tablero[x - 1][y + 1] === 1) contador++;
      }

      creadorTablero[x][y] = creandoTablero(tablero[x][y], contador);
    }
  }
  juego(creadorTablero);
}
function creandoTablero(vivos, vecinos) {
  if (vivos === 1) {
    if (vecinos < 2) {
      return 0;
    }
    if (vecinos > 3) {
      return 0;
    }
    if (vecinos === 2 || vecinos === 3) {
      return 1;
    }
  }
  if (vivos === 0) {
    if (vecinos === 3) {
      return 1;
    }
  }
  return 0;
}

console.log(juego(tableroOriginal));
