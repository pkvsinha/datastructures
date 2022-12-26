import { expect } from "chai";
import BinaryMinHeap from "../binary-min-heap";

describe('Heap', () => {
  describe("Basic Operations: ", () => {
    const heap = new BinaryMinHeap();

    it('empty should return true with size zero', () => {
      expect(heap.empty()).to.be.true;
      expect(heap.size()).to.equal(0);
    });

    [
      [0, 3, 3],
      [0, 9, 3],
      [0, 6, 3],
      [0, 1, 1],
      [0, 16, 1],
      [1, 1],
      [0, 2, 2],
      [1, 2],
      [1, 3]
    ].forEach(([op, el, ex]) => {
      it(`after inserting ${el} to ${heap._arr} min should be ${ex}`, () => {
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