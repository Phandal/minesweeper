/**
 * Board with 2d array under the hood
 * @implements {Board}
 */
export class ListBoard {
  /** @type {Cell[][]} */
  cells;
  /** @type {Difficulty} */
  difficulty;

  /**
   * Constructs a new ListBoard Object
   * @param {BoardOptions} o
   */
  constructor(o) {
    this.cells = [];
    this.difficulty = o.difficulty;
    const factory = o.cellFactory;

    for (let i = 0; i < this.difficulty.width; ++i) {
      this.cells[i] = [];
      for (let j = 0; j < this.difficulty.height; ++j) {
        this.cells[i][j] = factory.create({ kind: 'space' });
      }
    }
  }

  /** @type {Board['getCells']} */
  getCells() {
    return this.cells;
  }

  /** @type {Board['getCell']} */
  getCell(coordinate) {
    return this.cells[coordinate.x][coordinate.y];
  }

  /** @type {Board['isCoordinateOnBoard']} */
  isCoordinateOnBoard(coord) {
    return (
      coord.x >= 0 &&
      coord.x < this.difficulty.width &&
      coord.y >= 0 &&
      coord.y < this.difficulty.height
    );
  }
}
