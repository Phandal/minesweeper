/**
 * @implements {CellFactory}
 */
export class CellFactoryStub {
  /** @type {CellFactory['create']} */
  create(_o) {
    return new CellStub();
  }
}

/**
 * @implements {Cell}
 */
export class CellStub {
  /** @type {boolean} */
  active = false;
  /** @type {boolean} */
  shouldEnd = false;
  /** @type {CellState} */
  state = 'inactive';

  /** @type { Cell['isActive']} */
  isActive() {
    return this.active;
  }

  /** @type {Cell['activate']} */
  activate() {
    this.active = true;
    return this.shouldEnd;
  }

  /** @type {Cell['getState']} */
  getState() {
    return this.state;
  }
}
