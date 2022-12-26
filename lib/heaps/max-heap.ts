import { Heap } from "./heap";

export interface MaxHeap<T> extends Heap<T> {
  max(): T;
}