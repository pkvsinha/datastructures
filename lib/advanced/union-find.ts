export default class UnionFind {

  data;

  sizes;

  size = 0;

  constructor(size: number) {
    this.data = new Array(size);
    this.sizes = new Array(size);
    this.size = size;
    for(let i = 0; i < size; i++) {
      this.data[i] = i;
      this.sizes[i] = 1;
    }
  }

  union(p: number, q: number) {
    let rootp = this.find(p);
    let rootq = this.find(q);
    if (rootp === rootq) return;
    if (this.sizes[rootp] < this.sizes[rootq]) {
      this.data[rootp] = rootq;
      this.sizes[rootq] += this.sizes[rootp]; 
    } else {
      this.data[rootq] = rootp;
      this.sizes[rootp] += this.sizes[rootq];
    }
    this.size -= 1;
  }

  find(p: number) {
    let node = p;
    while(node != this.data[node]) node = this.data[node];
    return node;
  }

  count(): number {
    return this.size;
  }

  connected(p: number, q: number) {
    return this.find(p) === this.find(q);
  }

}