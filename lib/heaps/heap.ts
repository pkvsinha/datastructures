import { Node } from "./Node";

export interface Heap {

  insert(node: Node): void;

  remove(node: Node): void;

  /**
   * remove the root element and push this new node.
   * 
   * @param node 
   */
  replace(node: Node): void

  size(): number;

  empty(): boolean;

  increaseKey(node: Node, key: number): void;

  decreaseKey(node: Node, key: number): void;

  union(heap: Heap): void;

  meld(heap: Heap): Heap;
}