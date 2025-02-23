// 7) Написать класс, реализующий список. Предусмотреть методы поиска, вставки, удаления, изменения элемента и определения длины списка.
export class List<T> {
  private items: T[] = [];

  get length(): number {
    return this.items.length;
  }

  insert(item: T): void {
    this.items.push(item);
  }

  remove(index: number): boolean {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  update(index: number, newItem: T): boolean {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = newItem;
      return true;
    }
    return false;
  }

  find(item: T): number {
    return this.items.indexOf(item);
  }

  get(index: number): T | null {
    return this.items[index] ?? null;
  }

  print(): void {
    console.log(this.items);
  }
}
