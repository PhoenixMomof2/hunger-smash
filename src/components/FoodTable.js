import React from "react";
import {foods} from './App';

function FoodTable() {
  return (
    <div className="food-Container">
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
            <tr>
              <td>{food.name}</td>
              <td>{food.category}</td>
              <td>{food.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodTable;
