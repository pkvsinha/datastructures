export default interface SymbolTable<Key, Value> {

  get(key: Key): Value | null;
  
  put(key: Key, value: Value): void;

  delete(key: Key): void;

  contains(key: Key): boolean;

  size(): number;

  isEmpty(): boolean;
}