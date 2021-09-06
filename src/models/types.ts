export const initialValue = {
  name: '',
  email: undefined as string | undefined,
};
type Value = typeof initialValue;

type PartialK<T, K extends PropertyKey = PropertyKey> = Partial<Pick<T, Extract<keyof T, K>>> & Omit<T, K> extends infer O
  ? { [P in keyof O]: O[P] }
  : undefined;

export const a: PartialK<Value, 'email'> = {
  name: 'pippo',
  email: undefined,
};

export type {
  Value,
  PartialK,
};
