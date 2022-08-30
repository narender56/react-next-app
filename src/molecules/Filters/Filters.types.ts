type StringOrNumber = string | number;

export interface FilterTypes {
  make: string;
  model: string;
  mileageFrom: StringOrNumber;
  mileageTo: StringOrNumber;
  powerFrom: StringOrNumber;
  powerTo: StringOrNumber;
  registration: string;
  fuel: string;
  priceFrom: StringOrNumber;
  priceTo: StringOrNumber;
  gearbox: string;
  exteriorColor: string;
  category: string;
}

export interface Dropdown {
  label: string;
  value: string;
}
