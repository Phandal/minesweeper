/**
 * Minesweeper Game
 * @implements {Game}
 */
export class Minesweeper {
  /** @type {Board} */
  #board;
  /** @type {Display} */
  #display
  /** @type {boolean} */
  #isRunning;

  /**
   * Construct a new Minesweeper object
   * @param {GameOptions} o
   */
  constructor(o) {
    this.#board = o.board;
    this.#display = o.display;
    this.#isRunning = true;
  }

  isRunning() {
    return this.#isRunning;
  }

  /**
   * @param {Coordinate} coordinate
   */
  tick(coordinate) {
    const cell = this.#board.getCell(coordinate)
    const bombExploded = cell.activate();
    this.#isRunning = !bombExploded
  }

  draw() {
    this.#display.draw(this.#board.getCells());
  }
}
