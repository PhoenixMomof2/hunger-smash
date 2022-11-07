import React from "react";

function FoodItem({food: {id, name, imgUrl, category, description} }) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} />
      <h3>{category}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FoodItem;

