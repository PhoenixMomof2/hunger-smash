import React from "react";
import Food from "./Food";

const FoodContainer = ({ foods }) => {
  const foodsCard = foods.map((food) => (<Food key={food.id} foods={food} />));
  return <ul className="cards">{foodsCard}</ul>;
}

export default FoodContainer;
