import { BinarySearchTree } from "../tree/bst/bst";
import { OrderedSymbolTable } from "./ordered-st";
import SymbolTable from "./symbol-table";

class Node<K, V> {
  key: K;
  value: V;
  left: Node<K, V> | null = null;
  right: Node<K, V> | null = null;
  size = 1;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

}

function find<K, V>(node: Node<K, V> | null, key: K) {
  let ptr = node;
  let parent = null;
  while(ptr !== null) {
    if (ptr.key === key) {
      break;
    }
    parent = ptr;
    if (key < ptr.key) {
      ptr = ptr.left;
    } else {
      ptr = ptr.right;
    }
  }
  if (parent == ptr) {
    parent = null;
  }
  return [parent, ptr];
}

export default class SimpleBSTTable<K, V> implements SymbolTable<K, V>, BinarySearchTree<K> {
  head: Node<K, V> | null = null;

  get(key: K): V | null {
    const [_, ptr] = find(this.head, key);
    return ptr === null ? null : ptr.value;
  }

  put(key: K, value: V): void {
    if (key == null || value == null) return;
    if (this.head == null) {
      this.head = new Node(key, value);
      return;
    }
    let ptr = this.head;
    while (ptr !== null) {
      if (ptr.key === key) {
        ptr.value = value;
        break;
      }
      ptr.size += 1;
      if (key < ptr.key) {
        if (ptr.left === null) {
          ptr.left = new Node(key, value);
          break;
        }
        ptr = ptr.left;
      } else {
        if (ptr.right === null) {
          ptr.right = new Node(key, value);
          break;
        }
        ptr = ptr.right;
      }
    }
  }

  delete(key: K): void {
    const [parent, ptr] = find(this.head, key);
    if (ptr === null) return;
    if (parent === null) {
      this.head = null;
      return;
    }
    if (parent.left == ptr) {
      // node to be deleted is left child.
      if (ptr.left === null) {
        parent.left = ptr.right;
      } else if (ptr.right === null) {
        parent.left = ptr.left;
      } else {
        parent.left = ptr.left;
        let node = ptr.left;
        // while (node !== null) {
        //   //
        // }
        /**
         *                   80
         *            34            98
         *       21        36
         *   10     24  33    38
         * 8    9  
         */
      }
      return;
    }
    // deleted node is the right child.
    
  }

  contains(key: K): boolean {
    throw new Error("Method not implemented.");
  }

  private _size(node: Node<K, V> | null): number {
    if (node === null) return 0;
    return node.size;
  }

  size(): number {
    return this._size(this.head);
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  min(): K | null {
    if (this.head === null) return null;
    let ptr = this.head;
    while (true) {
      if (ptr.left === null) break;
      ptr = ptr.left;
    }
    return ptr.key;
  }

  max(): K | null {
    if (this.head === null) return null;
    let ptr = this.head;
    while (true) {
      if (ptr.right === null) break;
      ptr = ptr.right;
    }
    return ptr.key;
  }
  
  private _floor(node: Node<K, V> | null, key: K): Node<K, V> | null {
    if (node === null) return null;
    if (node.key === key) return node;
    if (key < node.key) return this._floor(node.left, key);
    let rightFloor = this._floor(node.right, key);
    if (rightFloor !== null) return rightFloor;
    return node;
  }

  floor(key: K): K | null {
    let floorNode = this._floor(this.head, key);
    return floorNode === null ? null : floorNode.key;
  }

  private _ceiling(node: Node<K, V> | null, key: K): Node<K, V> | null {
    if (node === null) return null;
    if (node.key === key) return node;
    if (key > node.key) return this._ceiling(node.right, key);
    let leftCeil = this._ceiling(node.left, key);
    if (leftCeil !== null) return leftCeil;
    return node;
  }

  ceiling(key: K): K | null {
    let ceilNode = this._ceiling(this.head, key);
    return ceilNode === null ? null : ceilNode.key;
  }

  rank(key: K): number {
    return 0;
  }
  
  select(rank: number): K | null {
    if (this.head === null) return null;
    let ptr: Node<K, V> | null = this.head;
    let n = rank;
    while(ptr != null && n > 0) {
      let t = this._size(ptr.left);
      /**
       *               20(10)
       *       12(8)            22(2)
       *  7(4)       13(4)
       * 
       * n: 5 - 4 - 1
       * t = 4,
       */
      if (t === n) {
        return ptr.key;
      }
      if (t > n) {
        ptr = ptr.left;
      } else if (t < n) {
        n = n - t - 1;
        ptr = ptr.right;
      }
    }
    return ptr === null ? null : ptr.key;
  }

}