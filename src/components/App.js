import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import FoodCard from "./FoodCard";
// import FoodForm from './FoodForm';
// import FoodTable from "./FoodTable";

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
      <FoodCard />
    </div>
  );
};

export default App;
