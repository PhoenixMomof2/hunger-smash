import React from "react";

function Food({food: {id, name, category, description} }) {
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{category}</td>
      <td>{description}</td>
    </tr>
  );
}

export default Food;
