export interface BinarySearchTree<Key> {
  min(): Key | null;

  max(): Key | null;

  floor(key: Key): Key | null;

  ceiling(key: Key): Key | null;

  /**
   * 
   * If the key is present, it returns its position 
   * else returns the number of keys less than the key.
   * 
   * @param key rank of the key
   */
  rank(key: Key): number;

  select(rank: number): Key | null;
}