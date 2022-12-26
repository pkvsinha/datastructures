import { expect } from "chai";
import BinaryMaxHeap from "../binary-max-heap";

describe('Heap', () => {
  describe("Basic Operations: ", () => {
    const heap = new BinaryMaxHeap();

    it('empty should return true with size zero', () => {
      expect(heap.empty()).to.be.true;
      expect(heap.size()).to.equal(0);
    });

    [
      [0, 3, 3],
      [0, 9, 9],
      [0, 6, 9],
      [0, 18, 18],
      [0, 16, 18],
      [1, 18],
      [0, 34, 34],
      [0, 22, 34],
      [1, 34],
      [1, 22]
    ].forEach(([op, el, ex]) => {
      it(`after inserting ${el} to ${heap._arr} max should be ${ex}`, () => {
        switch(op) {
          case 0:
            heap.insert(el);
            expect(heap.peek()).to.equal(ex);
            break;
          case 1:
            ex = el;
            expect(heap.remove()).to.equal(ex);
        }
      });
    });
    
  })
});