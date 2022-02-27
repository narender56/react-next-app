export type FilterTypes = {
  make: string,
  model: string,
  mileageFrom: string | number,
  mileageTo: string | number,
  powerFrom: string | number,
  powerTo: string | number,
  registration: string,
  fuel: string,
  priceFrom: string | number,
  priceTo: string | number,
  gearbox: string,
  exteriorColor: string,
  category: string
}

export type Dropdown = {
  label: string,
  value: string
}