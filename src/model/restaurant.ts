export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type ChangeAddress = (address: Address) => void;