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
            <tr>
              <td>{foods.name}</td>
              <td>{foods.category}</td>
              <td>{foods.description}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FoodTable;
