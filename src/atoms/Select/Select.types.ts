export interface Option {
  value: any,
  label: string
}

export interface SelectProps {
  placeholder: string,
  value: string | number,
  options: Option[],
  onChange: (newValue: string) => void;
  classes?: string
}
