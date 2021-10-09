const { juego, creandoTablero } = require("./gameOfLife");

describe("When it receive function juego", () => {
  describe("It recieve an array with 3 positions and has two neighbours", () => {
    test("It should return a new array");

    const dimensionesTablero = 5;
    const tableroTest = Array(dimensionesTablero)
      .fill(0)
      .map(() => Array(dimensionesTablero).fill(0));

    tableroTest[1][2] = 1;
    tableroTest[2][2] = 1;
    tableroTest[3][2] = 1;
    const nuevoTableroTest = Array(dimensionesTablero)
      .fill(0)
      .map(() => Array(dimensionesTablero).fill(0));
    nuevoTableroTest[2][1] = 1;
    nuevoTableroTest[2][2] = 1;
    nuevoTableroTest[2][3] = 1;
    const expected = nuevoTableroTest;

    const result = juego(tableroTest);
    expect(result).toEqual(expected);
  });
});
