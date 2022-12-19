import { HeapNode } from "./heap-node";

export interface Heap {

  insert(element: HeapNode): void;

  remove(): HeapNode;

  peek(): HeapNode;

  size(): number;

  empty(): boolean;

  /**
   * remove the root element and push this new element.
   * 
   * @param element 
   */
  // replace(element: HeapNode): void;

  // delete(element: HeapNode): void;

  // increaseKey(element: HeapNode, key: number): void;

  // decreaseKey(element: HeapNode, key: number): void;

  // union(heap: Heap): void;

  // meld(heap: Heap): Heap;
}