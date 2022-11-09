import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({foods}) => {
  
 
  return (
    <div className="food-list">
      <br/>
      <br/>
      <ul className="food-cards">
        {foods.map((food) => (
          <FoodItem key={food.id} food={food} />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
