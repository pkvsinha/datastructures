import { HeapNode } from "./heap-node";
import util from './heap-util';
import { MinHeap } from "./min-heap";

export default class BinaryMinHeap<T extends HeapNode | number> implements MinHeap<T> {
  _arr: Array<T> = [];

  min(): T {
    throw new Error("Method not implemented.");
  }

  insert(element: T): void {
    this._arr.push(element);
    util.up(this._arr, this._arr.length - 1, 1);
  }

  remove(): T {
    let element = this._arr[0];
    this._arr[0] = this._arr[this._arr.length - 1];
    util.down(this._arr, 0, 1);
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