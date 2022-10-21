import { MaxHeap } from "./max-heap";
import { Node } from "./Node";

export default class BinaryHeap implements MaxHeap {
  _arr: Array<Node> = [];

  max(): Node {
    throw new Error("Method not implemented.");
  }
  insert(element: Node): void {
    throw new Error("Method not implemented.");
  }
  
}