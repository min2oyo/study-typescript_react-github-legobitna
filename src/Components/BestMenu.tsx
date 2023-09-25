import { MenuType, RestaurantType, StringToStringType } from "../model/types";

interface Props {
  bestMenu: Omit<MenuType, `price`>;
  address?: Pick<RestaurantType, `address`>;
  showBestMenuName: StringToStringType;
}

const BestMenu = ({ bestMenu, showBestMenuName }: Props) => {
  return (
    <div>BestMenu</div>
  );
};

export default BestMenu;