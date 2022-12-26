import { HeapNode } from "./heap-node";

export interface ExtendedHeapOps {

  /**
   * remove the root element and push this new element.
   * 
   * @param element 
   */
  replace(element: HeapNode): void;

  delete(element: HeapNode): void;

  increaseKey(element: HeapNode, key: number): void;

  decreaseKey(element: HeapNode, key: number): void;

  union(heap: HeapNode): void;

  meld(heap: HeapNode): ExtendedHeapOps;
}