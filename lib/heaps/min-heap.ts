import { Heap } from "./heap";
import { Node } from "./Node";

export interface MinHeap extends Heap {
  insert(element: Node): void;

  min(): Node;
}