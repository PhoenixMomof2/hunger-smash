import React, { useState, useEffect } from "react";
import FoodItem from "./FoodItem";

const FoodList = () => {

  const url = "http://localhost:3001/foods";
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    console.log("Using useEffect");
    fetch(url)
      .then((res) => res.json())
      .then((foods) => setFoods(foods));
      
  }, []);


  return (
    <div className="food-list">
      <ul className="food-cards">
        {foods.map((food) => (
          <FoodItem key={food.id} food={food} />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
