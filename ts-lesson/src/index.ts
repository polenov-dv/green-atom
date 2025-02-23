import { List } from "./classes/list.js";
import { HashTable } from "./classes/hashTable.js";

//Использование Списка
const myList = new List<number>();

console.log("/////////////////// Список ////////////////////////");
console.log("Добавление элементов: 10, 20, 30");

myList.insert(10);
myList.insert(20);
myList.insert(30);

console.log("Длина списка:", myList.length);
console.log("Индекс элемента 20:", myList.find(20));
console.log("Удаление элемента 20:", myList.remove(1));
console.log("Замена элемента 10 на 100):", myList.update(0, 100));

myList.print();

//Использование хеш-таблицы
console.log("///////////////// Xеш-таблица ////////////////////////");
const hashTable = new HashTable<string, number>();

console.log(
  "Добавление элементов: (ключ: one, значение: 1), (ключ: two, значение: 2)"
);
hashTable.insert("one", 1);
hashTable.insert("two", 2);

console.log("Значения по ключу one: ", hashTable.search("one"));
console.log("Значения по ключу two: ", hashTable.search("two"));
console.log("Длина таблицы: ", hashTable.size());

console.log("Изменение значения по ключу one на 10");
hashTable.update("one", 10);
console.log("Значения по ключу one: ", hashTable.search("one"));

console.log("Удаление значения по ключу one");
hashTable.delete("one");

console.log("Длина таблицы: ", hashTable.size());
