const dimensionesTablero = 5;
 
 function game (tablero, dimensionesTablero){
   const creadorTablero = Array(dimensionesTablero)
    .fill(0)
    .map(()=> Array(dimensionesTablero).fill(0));
 
   for (let x = 0; x < tablero.length; x++) {
    for (let y = 0; y < tablero[x].length; y++) {
      let contador = 0;
        if(tablero[x - 1] !== undefined){
          if(tablero[x - 1][j] === 1)contador++;
          if(tablero[x - 1][j - 1] === 1)contador++
          if(tablero[x - 1][j + 1] === 1)contador++
        }
        if(tablero[x][j - 1] === 1)contador++;
        if(tablero[x][j + 1] === 1)contador++;
        if(tablero[x + 1] !== undefined){
          if(tablero[x + 1][j] === 1)contador++;
          if(tablero[x + 1][j - 1] === 1)contador++;
          if(tablero[x + 1][j + 1] === 1)contador++;
        }
        creadorTablero[x][j] = paintCell(tablero[x][j], contador)
      }
    }