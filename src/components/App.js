import React from 'react';

import Header from './Header';
import NavBar from './NavBar';
import FoodForm from './FoodForm';
import FoodCard from './FoodCard';
import { useState, useEffect } from 'react';

const url = 'http://localhost:3001/foods'

function App() {

  useEffect(() => {
    fetch(url)
    .then(res=>res.json())
    .then(foods=> console.log(foods))
  },[])

  //const [meal, setMeal] = useState("")

  return (
    <div className="App">
      <Header />
      <NavBar />
      <FoodForm />
      <FoodCard />
    </div>
  );
}

export default App;
