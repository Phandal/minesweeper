import { createInterface } from 'node:readline/promises';

class Base {
  /**
   * Converts from input to a Coordinate
   * @param {string} raw - with x coordinate in letters and y coordinate in numbers. Example (A1, AB2, A12, AB12)
   * @returns {Coordinate}
   */
  coordinateFrom(raw) {
    let state = 'x';
    let x = 0;
    let y = 0;
    const charOffset = 'a'.charCodeAt(0) - 1;

    for (const char of raw.toLowerCase().trim()) {
      if (char.match(/[a-iA-I]/) !== null && state === 'x') {
        x = x * 10 + (char.charCodeAt(0) - charOffset);
      } else if (char.match(/[1-9]/) !== null) {
        state = 'y';
        y = y * 10 + Number(char);
      } else {
        throw new Error(
          `invalid input: invalid character '${char}' in input '${raw}'`,
        );
      }
    }

    if (!x || !y) {
      throw new Error(`invalid input: missing both points '${raw}'`);
    }

    return {
      x: x - 1,
      y: y - 1,
    };
  }
}

/**
 * An input that works in the console/terminal
 * @implements {Input}
 */
export class ConsoleInput extends Base {
  /** @type {Input['getCoordinate']} */
  async getCoordinate() {
    const readline = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const rawInput = await readline.question('Enter coordinates:');
    readline.close();

    return this.coordinateFrom(rawInput);
  }
}
