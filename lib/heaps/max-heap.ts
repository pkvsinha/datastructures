import { Heap } from "./heap";
import { HeapNode } from "./heap-node";

export interface MaxHeap extends Heap {
  max(): HeapNode;
}