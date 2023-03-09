import { expect } from "chai";
import UnionFind from "../union-find";

describe('Union Find', () => {
  it('should perform union-find ops', () => {
    let uf = new UnionFind(10);
    [
      [4, 3],
      [3, 8],
      [6, 5],
      [9, 4],
      [2, 1],
      [8, 9],
      [5, 0],
      [7, 2],
      [6, 1],
      [1, 0],
      [6, 7]
    ].forEach(([p, q]) => {
      uf.union(p, q);
    });
    expect(uf.count()).to.equal(2);
  });
});