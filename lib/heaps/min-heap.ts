import { Heap } from "./heap";
import { Node } from "./heap-node";

export interface MinHeap extends Heap {
  insert(element: Node): void;

  min(): Node;
}