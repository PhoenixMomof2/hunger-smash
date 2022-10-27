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
              <td>name={food.name}</td>
              <td>category={food.category}</td>
              <td>description={food.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodTable;
