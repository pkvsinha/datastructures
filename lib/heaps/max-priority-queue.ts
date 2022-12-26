import BinaryMaxHeap from "./binary-max-heap";
import { HeapNode } from "./heap-node";
import { MaxHeap } from "./max-heap";

class PQNode<K, V> implements HeapNode {
  key: K;
  value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  compareTo(node: PQNode<K, V>): number {
    if (this.key < node.key) {
      return -1;
    } else if (this.key === node.key) {
      return 0;
    }
    return 1;
  }
}

export default class MaxPriorityQueue<K, V> {
  
  _heap: MaxHeap<PQNode<K, V>>;

  constructor() {
    this._heap = new BinaryMaxHeap();
  }

  insert(k: K, v: V) {
    this._heap.insert(new PQNode(k, v));
  }

  remove(): [K | undefined, V | undefined] {
    const maxNode = this._heap.remove();
    if (maxNode !== undefined) {
      return [maxNode.key, maxNode.value];
    }
    return [undefined, undefined];
  }

  peek(): [K, V] {
    const maxNode: PQNode<K, V> = this._heap.peek();
    return [maxNode.key, maxNode.value];
  }

  empty(): boolean {
    return this._heap.empty();
  }
}