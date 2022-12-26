export interface Heap<T> {

  insert(element: T): void;

  remove(): T | undefined;

  peek(): T;

  size(): number;

  empty(): boolean;

  contains(element: T): boolean;
}