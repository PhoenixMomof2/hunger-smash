import React, { useState, useEffect } from "react";
import FoodItem from "./FoodItem";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    console.log("Using useEffect");
    fetch("http://localhost:3001/foods")
      .then((res) => res.json())
      .then((foods) => setFoods(foods));
      
  }, []);

  // in FoodList:
function handleAddNewFood(newFood){
  setFoods([...foods, newFood]) // Updating foods state.
 }
 
  return (
    <div className="food-list">
      <br/>
      <br/>
      <ul className="food-cards">
        {foods.map((food) => (
          <FoodItem key={food.id} food={food} onAddNewFood={handleAddNewFood} />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
