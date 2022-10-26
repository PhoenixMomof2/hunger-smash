import React from 'react';

import Header from './Header';
import NavBar from './NavBar';
// import FoodForm from './FoodForm';
// import FoodTable from './FoodTable';
import { useState, useEffect } from 'react';

const url = 'http://localhost:3001/foods'

const App = () => {

  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(foods => setFoods(foods));
  }, []);

  const meals = foods.map(food => <li>{food.name}</li>)
  

  return (
    <div className="App">
      <Header />
      <NavBar />
       <ul>{meals}</ul>
    </div>
  );
}

export default App;
