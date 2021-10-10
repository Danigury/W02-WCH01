const botonGenerarTablero = document.querySelector(".boton");
const botonJugar = document.querySelector("jugar__boton-jugar");
botonGenerarTablero.addEventListener("click", function () {
  this.style.visibility = "hidden";
});

const dimensionesTablero = 20;
let tableroOriginal = Array(dimensionesTablero)
  .fill(0)
  .map(() => Array(dimensionesTablero).fill(0));
/* tableroOriginal[1][2] = 1;
tableroOriginal[2][2] = 1;
tableroOriginal[3][2] = 1; */

function juego(tablero) {
  const tableroNuevo = Array(dimensionesTablero)
    .fill(0)
    .map(() => Array(dimensionesTablero).fill(0));

  /* if (count === 0) {
    return;
  } */

  for (let x = 0; x < tablero.length; x++) {
    for (let y = 0; y < tablero[x].length; y++) {
      let contador = 0;
      if (tablero[x - 1] !== undefined) {
        if (tablero[x - 1][y] === 1) contador++;
        if (tablero[x - 1][y - 1] === 1) contador++;
        if (tablero[x - 1][y + 1] === 1) contador++;
      }
      if (tablero[x][y - 1] === 1) contador++;
      if (tablero[x][y + 1] === 1) contador++;
      if (tablero[x + 1] !== undefined) {
        if (tablero[x + 1][y] === 1) contador++;
        if (tablero[x + 1][y - 1] === 1) contador++;
        if (tablero[x + 1][y + 1] === 1) contador++;
      }

      tableroNuevo[x][y] = creandoTablero(tablero[x][y], contador);

      if (tableroNuevo[x][y] === 0) {
        document.querySelector(`${x}-${y}`).style.background = "#ccc9bef5";
      }
      if (tableroNuevo[x][y] === 1) {
        document.querySelector(`${x}-${y}`).style.background = "darkgoldenrod";
      }
    }
  }
  // console.log(tableroNuevo);
  // juego(tableroNuevo, count - 1);
  return tableroNuevo;
}

function cambiandoColorCelda() {
  const posicion = this.id.split("-");
  tableroOriginal[posicion[0]][posicion[1]] = 1;
  if (this.style.background === "#fdfeee") {
    this.style.background = "red";
  } else {
    this.style.background = "#fdfeee";
  }
}

juego(tableroOriginal, 5);

module.exports = { juego, creandoTablero };

function creadorTableroHtml() {
  const tableroHtml = document.querySelector(".boardGame__board");

  const tabla = document.createElement("table");
  const tblBody = document.createElement("tbody");

  for (let x = 0; x < 20; x++) {
    const hilera = document.createElement("tr");
    tblBody.appendChild(hilera);
    hilera.classList.add("board__hilera");

    for (let y = 0; y < 20; y++) {
      const celda = document.createElement("td");
      const textoCelda = document.createTextNode("");
      hilera.appendChild(celda);
      celda.appendChild(textoCelda);
      celda.className = "celda";
      celda.style.background = "#fdfeee";
      celda.id = `${x}-${y}`;
      celda.onclick = cambiandoColorCelda;
    }
  }

  tabla.appendChild(tblBody);
  tableroHtml.appendChild(tabla);
  tabla.setAttribute("border", "2");
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

function jugando() {
  setInterval(() => {
    tableroOriginal = juego(tableroOriginal, 20);
  }, 2000);
}

botonJugar.onclick = () => {
  jugando();
};

creadorTableroHtml();
juego(tableroOriginal, 20);
