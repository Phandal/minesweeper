/**
 * Minesweeper Game
 * @implements {Game}
 */
export class Minesweeper {
  /** @type {Board} */
  board;
  /** @type {Display} */
  display;
  /** @type {Input} */
  input;
  /** @type {boolean} */
  #isRunning;

  /**
   * Construct a new Minesweeper object
   * @param {GameOptions} o
   */
  constructor(o) {
    this.board = o.board;
    this.display = o.display;
    this.input = o.input;
    this.#isRunning = true;
  }

  /** @type {Game['isRunning']} */
  isRunning() {
    return this.#isRunning;
  }

  /** @type {Game['tick']} */
  tick(coordinate) {
    const cell = this.board.getCell(coordinate);
    const bombExploded = cell.activate();
    this.#isRunning = !bombExploded;
  }

  /** @type {Game['draw']} */
  draw() {
    this.display.draw(this.board.getCells());
  }

  /** @type {Game['getCoordinate']} */
  async getCoordinate() {
    const rawCoord = await this.input.getCoordinate();
    if (!this.board.isCoordinateOnBoard(rawCoord)) {
      throw new Error(
        `invalid coordinate: out of bounds '${JSON.stringify(rawCoord)}'`,
      );
    }

    return rawCoord;
  }
}
