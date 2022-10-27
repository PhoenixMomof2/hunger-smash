import React from "react";
import Food from "./Food";

function FoodTable({ foods }) {
  return (
    <div className="food-Table">
      {console.log("Table Rendering")}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <Food key={food.id} food={food} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodTable;
