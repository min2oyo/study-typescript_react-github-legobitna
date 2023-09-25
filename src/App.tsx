import { useEffect, useState } from 'react';

import axios from 'axios';

import Store from './Components/Store';
import BestMenu from './Components/BestMenu';
import { bestMenuState, restaurantState } from './model/states';
import { AddressToVoidType, StringToStringType } from './model/types';

const App = () => {

  const [restaurant, setRestaurant] = useState(restaurantState);
  const [bestMenu, setBestMenu] = useState(bestMenuState);

  const changeAddress: AddressToVoidType = (address) => {
    setRestaurant({ ...restaurant, address: address });
  };

  const showBestMenuName: StringToStringType = (name) => {
    return name;
  };

  useEffect(() => {
    Promise.all([
      axios(`/data/restaurant.json`),
      axios(`/data/best-ment.json`)
    ])
      .then(res => {
        setRestaurant(res[0].data);
        setBestMenu(res[1].data);
      });
  }, []);

  return (
    <div className="App">
      <Store restaurant={restaurant} changeAddress={changeAddress} />
      <BestMenu bestMenu={bestMenu} showBestMenuName={showBestMenuName} />
    </div>
  );

};

export default App;
