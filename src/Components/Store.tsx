import { Restaurant, ChangeAddress } from "../model/restaurant";

const Store = ({ name, category, address, menu, changeAddress }: Restaurant & { changeAddress: ChangeAddress; }) => {

  return (
    <div>Store</div>
  );
};

export default Store;