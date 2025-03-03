import { ListBoard } from './board.js';
import { CellFactory } from './cell.js';
import { DifficultyFactory } from './difficulty.js';
import { ConsoleDisplay } from './display.js';
import { Minesweeper } from './game.js';
import { ConsoleInput } from './input.js';

async function main() {
  const difficulty = new DifficultyFactory().create({ mode: 'extreme' });
  const input = new ConsoleInput();
  const display = new ConsoleDisplay();
  const cellFactory = new CellFactory();
  const board = new ListBoard({ difficulty, cellFactory });
  const game = new Minesweeper({ display, input, board });

  while (game.isRunning()) {
    try {
      game.draw();
      const coordinate = await game.getCoordinate();
      game.tick(coordinate);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'unexpected error';
      console.error(`error: ${msg}`);
    }
  }
}

main().catch((err) => console.error(`Unexpected Error: ${err}`));
