import { useState } from 'react';

import axios from 'axios';

import Store from './Components/Store';
import { ChangeAddress } from './model/restaurant';

import './App.css';
import BestMenu from './Components/BestMenu';

const init = {
  name: ``,
  category: ``,
  address: {
    city: ``,
    detail: ``,
    zipCode: 0
  },
  menu: [],
};

const bestMenuInit = {
  name: ``,
  category: ``,
  price: 0
};

const App = () => {

  const [restaurant, setRestaurant] = useState(init);
  const { name, category, address, menu } = restaurant;
  const [bestMenu, setBestMenu] = useState(bestMenuInit);

  const changeAddress: ChangeAddress = address => {
    setRestaurant({ ...restaurant, address: address });
  };

  useState(() => {
    Promise.all([axios(`/data/restaurant.json`), axios(`/data/best-ment.json`)])
      .then(res => {
        console.log(res[0].data);
        console.log(res[1].data);
        // setRestaurant(res[0].data);
        // setRestaurant(res[1].data);
      });
  });
  return (
    <div className="App">
      <Store name={name} category={category} address={address} menu={menu} changeAddress={changeAddress} />
      <BestMenu />
    </div>
  );
};

export default App;
