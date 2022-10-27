import React from "react";
import FoodCard from "./FoodCard";

const FoodContainer = ({ foods }) => {
  const foodsCard = foods.map((food) => (<FoodCard key={food.id} foods={food} />));
  return <ul className="cards">{foodsCard}</ul>;
}

export default FoodContainer;
