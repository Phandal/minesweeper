import { CellFactory } from './cell.js';
import { ConsoleDisplay } from './display.js';
import { ListBoard } from './board.js';
import { Minesweeper } from './game.js';
import { createInterface } from 'node:readline/promises';

/**
 * Hacky way to get user input. TODO: Make this better
 * @returns {Promise<string>}
 */
async function getInput() {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const coords = await readline.question('Enter coordinates:');
  console.log('Coordinates:', coords);
  readline.close();

  return coords;
}

async function main() {
  const width = 9;
  const height = 9;
  const bombs = 10;

  const display = new ConsoleDisplay();
  const cellFactory = new CellFactory();
  const board = new ListBoard({ width, height, bombs, cellFactory });
  const game = new Minesweeper({ display, board });

  while (game.isRunning()) {
    game.draw();
    const coordinate = await getInput();
    game.tick({ x: 1, y: 2 });
  }
}

main()
  .catch(err => console.error(`Unexpected Error: ${err}`));
