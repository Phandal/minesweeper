/**
 * Board with 2d array under the hood
 * @implements {Board}
 */
export class ListBoard {
  /** @type {Cell[][]} */
  #cells;

  /**
   * Constructs a new ListBoard Object
   * @param {BoardOptions} o
   */
  constructor(o) {
    this.#cells = [];
    const factory = o.cellFactory;

    for (let i = 0; i < o.width; ++i) {
      this.#cells[i] = [];
      for (let j = 0; j < o.height; ++j) {
        this.#cells[i][j] = factory.create({ kind: 'space' });
      }
    }
  }

  getCells() {
    return this.#cells;
  }

  /**
   * @param {Coordinate} coordinate
   */
  getCell(coordinate) {
    return this.#cells[coordinate.x][coordinate.y];
  }
}
