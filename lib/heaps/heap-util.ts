function less(a: number, b: number) {
  return a < b;
}

function greater(a: number, b: number) {
  return a > b;
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
  key(array : any[], index: number): number {
    return array[index];
  },
  up(array: any[], index: number, cmp = 0) {
    let comparator = less;
    if (cmp === 0) {
      comparator = greater;
    }
    let swapIndex = index;
    let parentIndex = util.parent(swapIndex);
    while (comparator(util.key(array, swapIndex), util.key(array, parentIndex)) && parentIndex >= 0) {
      util.swap(array, swapIndex, parentIndex);
      swapIndex = parentIndex;
      parentIndex = util.parent(swapIndex);
    } 
  },
  down(array: any[], index: number, cmp = 0) {
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