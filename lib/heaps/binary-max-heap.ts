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

  remove(): T {
    let element = this._arr[0];
    this._arr[0] = this._arr[this._arr.length - 1];
    util.down(this._arr, 0);
    return element;
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