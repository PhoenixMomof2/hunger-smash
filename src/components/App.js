import React from "react";

import Header from "./Header";
import NavBar from "./NavBar";
// import FoodForm from './FoodForm';
import FoodTable from "./FoodTable";
import { useState, useEffect } from "react";

const url = "http://localhost:3001/foods";

const App = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    console.log("Using useEffect");
    fetch(url)
      .then((res) => res.json())
      .then((foods) => setFoods(foods));
  }, [foods]);

  return (
    <div className="app-container">
      {console.log("App Rendering")}
      <Header />
      <NavBar />
      <FoodTable />
    </div>
  );
};

export {name, category, description, App };
