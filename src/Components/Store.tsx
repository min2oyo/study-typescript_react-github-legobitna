import { RestaurantType, AddressToVoidType } from "../model/types";

interface Props {
  restaurant: RestaurantType;
  changeAddress: AddressToVoidType;
}

const Store = ({ restaurant, changeAddress }: Props) => {
  const { name, category, address, menu } = restaurant;
  return (
    <div>Store</div>
  );
};

export default Store;