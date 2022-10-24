import React from 'react';

import Header from './Header';
import FoodForm from './FoodForm';
import FoodCard from './FoodCard';
import { useState } from 'react';

const url = 'http://localhost:3001/foods'

function App() {

  useState(() => {
    fetch(url)
    .then(res=>res.json())
    .then(foods=> console.log(foods))
  },[])
  
  return (
    <div className="App">
      <Header />
      <FoodForm />
      <FoodCard />
    </div>
  );
}

export default App;
