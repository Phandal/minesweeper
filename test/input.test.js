import { describe, it } from 'node:test';
import * as assert from 'node:assert';
import { ConsoleInput } from '../src/input.js';

describe('ConsoleInput', () => {
  it('coordinateFrom', () => {
    const input = new ConsoleInput();
    const inputs = [
      'a1',
      'a12',
      'ab1',
      'ab12',
      'A1',
      'A12',
      'AB1',
      'AB12',
      'ab12 ',
      ' ab12',
      ' ab12 ',
    ];

    const wants = [
      { x: 0, y: 0 },
      { x: 0, y: 11 },
      { x: 11, y: 0 },
      { x: 11, y: 11 },
      { x: 0, y: 0 },
      { x: 0, y: 11 },
      { x: 11, y: 0 },
      { x: 11, y: 11 },
      { x: 11, y: 11 },
      { x: 11, y: 11 },
      { x: 11, y: 11 },
    ];

    inputs.forEach((raw, index) => {
      const got = input.coordinateFrom(raw);
      assert.deepEqual(got, wants[index]);
    });

    assert.throws(() => input.coordinateFrom('1a'));
    assert.throws(() => input.coordinateFrom('z1'));
    assert.throws(() => input.coordinateFrom('j1'));
    assert.throws(() => input.coordinateFrom('J1'));
    assert.throws(() => input.coordinateFrom('a0'));
    assert.throws(() => input.coordinateFrom('A0'));
  });
});
