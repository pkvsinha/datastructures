/* eslint-disable no-undef */
import MaxPriorityQueue from '../max-priority-queue';
import { expect } from 'chai';

describe('Max Priority Queue', () => {
  describe('ops', () => {
    const pq = new MaxPriorityQueue<number, object>();
    [
      { key: 4, value: { task: "Finish Eating" }, op: 'insert' },
      { key: 9, value: { task: "Run for life" }, op: 'insert' },
      { key: -1, value: { task: "invalid" }, op: 'remove', output: [9, { task: "Run for life" }] },
      { key: 1, value: { task: "Easy Peasy" }, op: 'insert' },
      { key: 3, value: { task: "Easy Peasy - 2" }, op: 'insert' },
      { key: 2, value: { task: "Easy Peasy - 3" }, op: 'insert' },
      { key: -1, value: { task: "invalid" }, op: 'remove', output: [4, { task: "Finish Eating" }] },
      { key: -1, value: { task: "invalid" }, op: 'remove', output: [3, { task: "Easy Peasy - 2" }] },
    ].forEach(({ key, value, op, output }) => {
      it(`should ${op} ${JSON.stringify(value)} with key ${key} in the priority queue`, () => {
        switch(op) {
          case 'insert':
            pq.insert(key, value);
            break;
          
          case 'remove':
            const [k, v] = pq.remove();
            expect([k, v]).to.eql(output);
        }
      })
    });
  });
});
