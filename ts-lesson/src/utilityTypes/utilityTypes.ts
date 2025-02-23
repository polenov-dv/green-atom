type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
