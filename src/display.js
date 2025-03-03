/**
 * A display that works in the console/terminal
 * @implements {Display}
 */
export class ConsoleDisplay {
  /** @type {Display['draw']} */
  draw(cells) {
    for (const row of cells) {
      let rowOutput = '';
      for (const cell of row) {
        const state = cell.getState();
        switch (state) {
          case 'inactive':
            rowOutput += '▓';
            break;
          case 'space':
            rowOutput += '░';
            break;
          case 'bomb':
            rowOutput += 'B';
        }
      }
      console.log(rowOutput);
    }
  }
}
