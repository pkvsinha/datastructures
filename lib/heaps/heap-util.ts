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
  key(array : any[], index: number) {
    return array[index];
  },
  up(array: any[], index: number) {
    let parentIndex = util.parent(index);
    while (util.key(array, index) > util.key(array, parentIndex)) {
      util.swap(array, index, parentIndex);
    } 
  },
  down(array: any[], index: number) {
    let nextIndex = index;
    while (nextIndex < array.length) {
      let left = util.left(nextIndex);
      let right = util.right(nextIndex);
      let swapIndex = left;
      if (util.key(array, right) > util.key(array, swapIndex)) {
        swapIndex = right;
      }
      if (util.key(array, swapIndex) > util.key(array, nextIndex)) {
        util.swap(array, nextIndex, swapIndex);
      } else {
        break;
      }
      nextIndex = swapIndex;
    }
  },
};

export default util;