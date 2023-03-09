interface Node {
  left: Node | null;
  right: Node | null;
  compare(x: Node) : number;
}

export function leftmost(node: Node): Node | null {
  if (node === null) return null;
  let ptr = node;
  while (true) {
    if (ptr.left === null) break;
    ptr = ptr.left;
  }
  return node;
}

export function floor(node: Node): Node | null {
  if (node === null) return null;
  return null;
}