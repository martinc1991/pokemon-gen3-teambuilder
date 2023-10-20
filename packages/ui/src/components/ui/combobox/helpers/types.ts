export interface ComboboxItem<T> {
  id: string;
  label: string;
  payload: T;
}

export interface ComboboxProps<T> {
  className?: string;
  clearButtonClassName?: string;
  clearDisabled?: boolean;
  cleareable?: boolean;
  clearText?: string;
  data: ComboboxItem<T>[];
  disabled?: boolean;
  itemsClassName?: string;
  onChange?: (item: ComboboxItem<T>) => void;
  onClear?: (item: ComboboxItem<T>) => void;
  placeholder?: string;
  searchBox?: boolean;
  value?: ComboboxItem<T>;
}
