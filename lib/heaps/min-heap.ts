import { Heap } from "./heap";

export interface MinHeap<T> extends Heap<T> {
  min(): T;
}