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
  down(array: HeapNodeType[], index: number, cmp = 0) {
    let comparator = less;
    if (cmp === 0) {
      comparator = greater;
    }
    let nextIndex = index;
    while (nextIndex < array.length) {
      let left = util.left(nextIndex);
      let right = util.right(nextIndex);
      let swapIndex = left;
      if (comparator(util.key(array, right), util.key(array, swapIndex))) {
        swapIndex = right;
      }
      if (comparator(util.key(array, swapIndex), util.key(array, nextIndex))) {
        util.swap(array, nextIndex, swapIndex);
      } else {
        break;
      }
      nextIndex = swapIndex;
    }
  },
};

export default util;