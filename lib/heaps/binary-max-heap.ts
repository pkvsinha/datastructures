import { MaxHeap } from "./max-heap";
import { HeapNode } from "./heap-node";
import util from './heap-util';

export default class BinaryMaxHeap<T extends HeapNode | number> implements MaxHeap<T> {
  _arr: Array<T> = [];

  max(): T {
    throw new Error("Method not implemented.");
  }

  insert(element: T): void {
    this._arr.push(element);
    util.up(this._arr, this._arr.length - 1);
  }

  remove(): T | undefined {
    if (!this.empty()) {
      let element = this._arr[0];
      let lastElement = this._arr.pop();
      if (lastElement !== undefined) {
        this._arr[0] = lastElement;
        util.down(this._arr, 0);
      }
      return element;
    }
    return undefined;
  }

  peek(): T {
    return this._arr[0];
  }

  size(): number {
    return this._arr.length;
  }

  empty(): boolean {
    return this._arr.length === 0;
  }
}