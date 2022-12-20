import { HeapNode } from "./heap-node";

export interface Heap<T> {

  insert(element: T): void;

  remove(): T;

  peek(): T;

  size(): number;

  empty(): boolean;
}