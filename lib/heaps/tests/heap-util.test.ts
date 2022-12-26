import util from '../heap-util';
import { expect } from 'chai';

describe('Heap Util', () => {
  describe('parent method should return', () => {
    [
      [1, 0],
      [2, 0],
      [3, 1],
      [4, 1],
      [5, 2],
      [6, 2],
      [7, 3],
      [8, 3],
      [9, 4],
      [10, 4],
    ].forEach(([i, p]) => {
      it(`parent index of ${i} to ${p}`, () => {
        expect(util.parent(i)).to.equal(p);
      })
    });
  })
  describe('up', () => {
    [
      { array: [3, 4, 9], i: 2, value: 9, k: 0 },
      { array: [12, 7, 6, 4, 8], i: 4, value: 8, k: 1 },
      { array: [21, 17, 12, 4, 8, 23], i: 5, value: 23, k: 0 },
      { array: [9, 3, 6, 18], i: 3, value: 18, k: 0 }
    ].forEach(({ array, i, value, k }) => {
      it(`should move ${value} from ${i} to index ${k}`, () => {
        util.up(array, i);
        expect(array[k]).to.equal(value);
      })
    });
  });

  describe('down', () => {
    [
      { input: [3, 4, 9], i: 0, output: [9, 4, 3] },
      { input: [150, 121, 200, 88, 77, 181, 50], i: 0, output: [200, 121, 181, 88, 77, 150, 50] },
      { input: [2, 12, 16, 8, 4, 11, 14], i: 0, output: [16, 12, 14, 8, 4, 11, 2] }
    ].forEach(({ input, i, output }) => {
      it(`should transform input: ${input} to output: ${output}`, () => {
        util.down(input, i);
        expect(input).to.eql(output);
      })
    });
  });
});
