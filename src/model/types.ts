export type AddressType = {
  city: string;
  detail: string;
  zipCode: number;
};

export type MenuType = {
  name: string;
  price: number;
  category: string;
};

export type RestaurantType = {
  name: string;
  category: string;
  address: AddressType;
  menu: MenuType[];
};

export type AddressToVoidType = (address: AddressType) => void;
export type StringToStringType = (name: string) => string;

export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type RestaurantResponse = ApiResponse<RestaurantType>;
export type MenuResponse = ApiResponse<MenuType>;