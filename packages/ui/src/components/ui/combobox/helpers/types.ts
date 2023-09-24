export interface ComboboxItem<T> {
  id: string;
  label: string;
  payload?: T;
}

export interface ComboboxProps<T> {
  data: ComboboxItem<T>[];
  placeholder?: string;
  searchBox?: boolean;
  onChange?: (item: ComboboxItem<T>) => void;
  value?: ComboboxItem<T>;
  disabled?: boolean;
}
