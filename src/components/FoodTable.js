import React from "react";
import * as RMFunctions from './App';

function FoodTable(foods) {

  
  return (
    <div className="food-Container">
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
