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

//   // in FoodList:
// function addNewFood(newFood){
//   setFoods([...foods, newFood) // Updating foods state.
//  }
 
//  //in FoodForm
//  const configObj = {
//   method: 'POST',
//   headers: {'Content-Type': 'application/json'},
//   body: JSON.stringify({name:"", imgUrl:"", category:"", description:""})
//  }
 
//  fetch('http://localhost:3000/foods', configObj)
//   .then(res => res.json())
//   .then(foods => setFoods(newFood)) //THIS STATE UPDATE IS REQUIRED!!!
//   // clear form
 

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
