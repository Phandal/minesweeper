type BoardOptions = {
  difficulty: Difficulty;
  cellFactory: CellFactory;
};

type CellFactoryCreateOptions = {
  kind: 'space' | 'bomb';
};

type CellState = 'space' | 'bomb' | 'inactive';

type Coordinate = {
  x: number;
  y: number;
};

type Difficulty = {
  width: number;
  height: number;
  bombs: number;
};

type DifficultyMode = 'easy' | 'medium' | 'hard' | 'extreme';

type DifficultyFactoryCreateOptions = {
  mode: DifficultyMode;
};

type GameOptions = {
  board: Board;
  display: Display;
  input: Input;
};

interface Board {
  /**
   * Gets a specific cell on the board
   * @param {Coordinate} coordinate
   * @returns {Cell}
   */
  getCell(coordinate: Coordinate): Cell;

  /**
   * Get all the cells on the board as a 2d list
   * @returns {Cell[][]}
   */
  getCells(): Cell[][];

  /**
   * Determins if a coordinate is on the board or not.
   * @param {Coordinate} coordinate
   */
  isCoordinateOnBoard(coordinate): boolean;
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
  getState(): CellState;
}

interface CellFactory {
  /**
   * Creates a new Cell
   * @param {CellFactoryCreateOptions} o
   * @returns {Cell}
   */
  create(o: CellFactoryCreateOptions): Cell;
}

interface Display {
  /**
   * Draw the cells on the display
   * @param {Cell[][]} cells
   * @returns void
   */
  draw(cells: Cell[][]): void;
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

  /**
   * Get input from the display
   * @returns {Promise<Coordinate>}
   */
  getCoordinate(): Promise<Coordinate>;
}

interface Input {
  /**
   * Gets a coordinate from the user and maps it to board space
   * @returns {Coordinate}
   */
  getCoordinate(): Promise<Coordinate>;
}
