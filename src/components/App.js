import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import FoodContainer from "./FoodContainer";
import FoodTable from "./FoodTable";

// import FoodForm from './FoodForm';

const url = "http://localhost:3001/foods";

const App = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    console.log("Using useEffect");
    fetch(url)
      .then((res) => res.json())
      .then((foods) => setFoods(foods));
      console.log(foods)
  }, []);

  return (
    <div className="app-container">
      {console.log("App Rendering")}
      <Header />
      <NavBar />
      <FoodTable foods={foods} />
      <FoodContainer foods={foods} />
    </div>
  );
}

export default App;
