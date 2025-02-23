export class HashTable<K, V> {
  private table: Map<K, V>;

  constructor() {
    this.table = new Map<K, V>();
  }

  insert(key: K, value: V): void {
    this.table.set(key, value);
  }

  search(key: K): V | undefined {
    return this.table.get(key);
  }

  delete(key: K): void {
    this.table.delete(key);
  }

  update(key: K, value: V): void {
    if (this.table.has(key)) {
      this.table.set(key, value);
    } else {
      throw new Error("Key not found");
    }
  }

  size(): number {
    return this.table.size;
  }
}
