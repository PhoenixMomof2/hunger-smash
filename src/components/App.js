import React from "react";

import Header from "./Header";
import NavBar from "./NavBar";
// import FoodForm from './FoodForm';
import FoodTable from "./FoodTable";
import { useState, useEffect } from "react";
// import Style from "./Style";

const url = "http://localhost:3001/foods";

const App = () => {
  const [foods, setFoods] = useState(foods);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((foods) => setFoods(foods));
  }, []);

  return (
    <div className="app-container">
      <Header />
      <NavBar />
      <FoodTable />
    </div>
  );
};

export default App;
