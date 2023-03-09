import { Heap } from "./heap";
import { HeapNode } from "./heap-node";

type HeapNodeType = number | string | boolean | HeapNode;

function compare(a: HeapNodeType, b: HeapNodeType): number {
  switch(typeof a) {
    case "string":
    case "number":
    case "boolean":
      if (a === b) {
        return 0;
      } else if (a < b) {
        return -1;
      } else {
        return 1;
      }
    default:
      if (typeof a !== "undefined" && a  !== null && typeof a.compareTo === "function") {
        return a.compareTo(<HeapNode>b);
      }
  }
  return 0;
}

function less(a: HeapNodeType, b: HeapNodeType) {
  return compare(a, b) < 0;
}

function greater(a: HeapNodeType, b: HeapNodeType) {
  return compare(a, b) > 0;
}

const util = {
  parent(index: number): number {
    return Math.floor((index - 1) / 2);
  },
  left(index: number): number {
    return 2 * index + 1;
  },
  right(index: number): number {
    return util.left(index) + 1;
  },
  swap(array: any[], i: number, j: number) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  },
  key(array : HeapNodeType[], index: number): HeapNodeType {
    return array[index];
  },
  heapify(array : HeapNodeType[]) {
    let N = array.length;
    let mid = Math.floor(N / 2);
    for (let i = mid - 1; i >= 0; i--) {
      util.down(array, i);
    }
  },
  isMaxHeap(array : HeapNodeType[]): boolean {
    let N = array.length;
    let mid = Math.floor(N / 2);
    for (let i = mid - 1; i >= 0; i--) {
      let leftKey = util.key(array, util.left(i));
      let rightKey = util.key(array, util.right(i));
      let currentKey = util.key(array, i);
      if (leftKey > currentKey || rightKey > currentKey) {
        return false;
      }
    }
    return true;
  },
  up(array: HeapNodeType[], index: number, cmp = 0) {
    let comparator = less;
    if (cmp === 0) {
      comparator = greater;
    }
    let swapIndex = index;
    let parentIndex = util.parent(swapIndex);
    while (parentIndex >= 0 && comparator(util.key(array, swapIndex), util.key(array, parentIndex))) {
      util.swap(array, swapIndex, parentIndex);
      swapIndex = parentIndex;
      parentIndex = util.parent(swapIndex);
    }
  },
  down(array: HeapNodeType[] & { heapSize?: number }, index: number, cmp = 0) {
    let comparator = less;
    if (cmp === 0) {
      comparator = greater;
    }
    let nextIndex = index;
    while (nextIndex < (array.heapSize || array.length)) {
      let leftIndex = util.left(nextIndex);
      let rightIndex = util.right(nextIndex);
      let swapIndex = nextIndex;
      if (leftIndex < (array.heapSize || array.length) 
          && comparator(util.key(array, leftIndex), util.key(array, swapIndex))) {
        swapIndex = leftIndex;
      }
      if (rightIndex < (array.heapSize || array.length) 
          && comparator(util.key(array, rightIndex), util.key(array, swapIndex))) {
        swapIndex = rightIndex;
      } 
      if (swapIndex === nextIndex) {
        break;
      }
      util.swap(array, nextIndex, swapIndex);
      nextIndex = swapIndex;
    }
  },
};

export default util;