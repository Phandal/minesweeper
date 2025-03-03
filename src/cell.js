/**
 * A Cell that does not contain a bomb
 * @implements {Cell}
 */
export class Space {
  /** @type {boolean} */
  active;

  /**
   * Constructs a new Space
   */
  constructor() {
    this.active = false;
  }

  /** @type {Cell['isActive']} */
  isActive() {
    return this.active;
  }

  /** @type {Cell['activate']} */
  activate() {
    this.active = true;
    return false;
  }

  /** @type {Cell['getState']} */
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
  active;

  /**
   * Constructs a new Bomb
   */
  constructor() {
    this.active = false;
  }

  /** @type {Cell['isActive']} */
  isActive() {
    return this.active;
  }

  /** @type {Cell['activate']} */
  activate() {
    this.active = true;
    return true;
  }

  /** @type {Cell['getState']} */
  getState() {
    return this.isActive() ? 'bomb' : 'inactive';
  }
}

/**
 * Create Cells based on a set of options
 */
export class CellFactory {
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
