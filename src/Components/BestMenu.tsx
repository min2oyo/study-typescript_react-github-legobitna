import { MenuType, RestaurantType, StringToStringType } from "../model/types";

interface Props {
  bestMenu: Omit<MenuType, `price`>;
  showBestMenuName: StringToStringType;
  category?: Pick<RestaurantType, `address`>;
}

const BestMenu = ({ bestMenu, showBestMenuName }: Props) => {
  const { name, category } = bestMenu;
  return (
    <div>BestMenu</div>
  );
};

export default BestMenu;