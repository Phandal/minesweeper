/**
 * A Cell that does not contain a bomb
 * @implements {Cell}
 */
export class Space {
  /** @type {boolean} */
  #active;

  /**
   * Constructs a new Space
   */
  constructor() {
    this.#active = false;
  }

  isActive() {
    return this.#active;
  }

  activate() {
    this.#active = true;
    return false;
  }

  getState() {
    return this.isActive() ? 'space' : 'inactive';
  }
}

/**
 * A Cell that contains a bomb
 * @implements {Cell}
 */
export class Bomb {
  /** @type {boolean} */
  #active;

  /**
   * Constructs a new Bomb
   */
  constructor() {
    this.#active = false;
  }

  isActive() {
    return this.#active;
  }

  activate() {
    this.#active = true;
    return true;
  }

  getState() {
    return this.isActive() ? 'bomb' : 'inactive';
  }
}

/**
 * Create Cells based on a set of options
 */
export class CellFactory {
  /**
   * Construct a new CellFactory
   */
  constructor() { }

  /**
   * @param {CellFactoryCreateOptions} o
   */
  create(o) {
    switch (o.kind) {
      case 'space':
        return new Space();
      case 'bomb':
        return new Bomb();
      default:
        throw new Error(`invalid cell type '${o.kind}'`);
    }
  }
}
