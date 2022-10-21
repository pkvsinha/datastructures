import { Heap } from "./heap";
import { Node } from "./Node";

export interface MaxHeap extends Heap {
  max(): Node;
}