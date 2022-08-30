export interface Option {
  label: string;
  value: string | number;
}

export interface SelectRangeTypes {
  label: string;
  from: {
    key: string;
    options: Option[];
    value: string | number;
    placeholder: string
  };
  to: {
    key: string;
    options: Option[];
    value: string | number;
    placeholder: string
  };
  onChange: (source: string, value: string) => void
}
