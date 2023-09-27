export interface ComboboxItem<T> {
  id: string;
  label: string;
  payload: T;
}

export interface ComboboxProps<T> {
  data: ComboboxItem<T>[];
  placeholder?: string;
  searchBox?: boolean;
  cleareable?: boolean;
  clearText?: string;
  onClear?: (item: ComboboxItem<T>) => void;
  onChange?: (item: ComboboxItem<T>) => void;
  value?: ComboboxItem<T>;
  disabled?: boolean;
  itemsClassName?: string;
}
