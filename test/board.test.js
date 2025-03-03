import { describe, it } from 'node:test';
import assert from 'node:assert';
import { DifficultyFactory } from '../src/difficulty.js';
import { ListBoard } from '../src/board.js';
import { CellFactoryStub } from './helpers.js';

describe('ListBoard', () => {
  it('isCoordinateOnBoard', () => {
    const cellFactory = new CellFactoryStub();
    const difficulty = new DifficultyFactory().create({ mode: 'easy' });
    const board = new ListBoard({ cellFactory, difficulty });

    const inputs = [
      { x: 0, y: 8 },
      { x: 8, y: 0 },
      { x: 0, y: 0 },
      { x: 8, y: 8 },
      { x: -1, y: 4 },
      { x: 4, y: -1 },
      { x: -1, y: -1 },
      { x: 9, y: 4 },
      { x: 4, y: 9 },
      { x: 9, y: 9 },
    ];

    const wants = [
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
    ];

    inputs.forEach((inpt, index) => {
      const got = board.isCoordinateOnBoard(inpt);
      assert.deepEqual(got, wants[index]);
    });
  });
});
