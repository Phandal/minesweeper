export class DifficultyFactory {
  /**
   * Creates a new difficulty.
   * @param {DifficultyFactoryCreateOptions} o
   * @returns {Difficulty}
   */
  create(o) {
    switch (o.mode) {
      case 'easy':
        return {
          width: 9,
          height: 9,
          bombs: 10,
        };
      case 'medium':
        return {
          width: 16,
          height: 16,
          bombs: 40,
        };
      case 'hard':
        return {
          width: 30,
          height: 16,
          bombs: 99,
        };
      case 'extreme':
        return {
          width: 30,
          height: 24,
          bombs: 160,
        };
      default:
        throw new Error(`invalid mode '${o.mode}'`);
    }
  }
}
