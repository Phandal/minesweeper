type GameOptions = {
  board: Board,
  display: Display,
};

type BoardOptions = {
  width: number,
  height: number,
  bombs: number,
  cellFactory: CellFactory,
};

type CellFactoryCreateOptions = {
  kind: 'space' | 'bomb',
};

type CellState = 'space' | 'bomb' | 'inactive';

type Coordinate = {
  x: number;
  y: number;
}

interface Game {
  /**
   * Explains whether the game is running or not
   * @returns {Boolean}
   */
  isRunning(): boolean;

  /**
   * Update the game board and all entities
   * @param {Coordinate} coordinate
   * @returns {void}
  */
  tick(coordinate: Coordinate): void;

  /**
   * Draw the game board on the display
   * @returns {void}
   */
  draw(): void;
}

interface Board {
  /**
   * Gets a specific cell on the board
   * @param {Coordinate} coordinate
   * @returns {Cell}
   */
  getCell(coordinate: Coordinate): Cell

  /**
   * Get all the cells on the board as a 2d list
   * @returns {Cell[][]}
   */
  getCells(): Cell[][];
}

interface Display {
  /**
   * Draw the cells on the display
   * @param {Cell[][]} cells
   * @returns void
   */
  draw(cells: Cell[][]): void
}

interface CellFactory {
  /**
   * Creates a new Cell
   * @param {CellFactoryCreateOptions} o
   * @returns {Cell}
   */
  create(o: CellFactoryCreateOptions): Cell
}

interface Cell {
  /**
   * Explains whether the cell has been activated or not
   * @returns {Boolean}
   */
  isActive(): boolean;

  /**
   * Activates the cell
   * @returns {Boolean} whether the activation ended the game or not
   */
  activate(): boolean;

  /**
   * Get the state that the  cell is in
   * @returns {CellState}
   */
  getState(): CellState
}

