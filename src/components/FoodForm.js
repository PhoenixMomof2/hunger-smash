import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const FoodForm = ({ handleAddNewFood }) => {
  // const category = categoryList.map(category)=>
  const [name, setName] = useState("");
  const [category, setCategory] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target, "submit handled")
    const newFoodData = {
      name: name,
      imgUrl: imgUrl,
      category: category,
      description: description,
    };
    console.log(newFoodData);

    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFoodData),
    })
      .then((res) => res.json())
      .then((newFood) => console.log (newFood)); //THIS STATE UPDATE IS REQUIRED!!!
    // clear form
  };

  return (
    <div>
      <br />
      <h2>Add New Meal</h2>
      <form className="NewFood">
        <div>
        <label>New Food Name:   </label>
          <input
            type="text"
            name="new-food-name"
            placeholder="Enter Food Name"
          />
        </div>
        <br />
        <div>
        <label>New Taste Category:   </label>
          <input
            type="text"
            name="category"
            placeholder="Enter Taste Category"
          />
        </div>
        <br />
        <div>
        <label>New Meal Image Source:   </label>
          <input type="text" name="img-Url" placeholder="Enter Image Source" />
        </div>
        <br />
        <div>
        <label>New Meal Description:   </label>
          <input
            type="text"
            name="description"
            placeholder="Enter New Meal Description"
          />
          
        </div>
        <br />
        <input type="submit" value="Submit" onSubmit={handleAddNewFood} />
      </form>
    </div>
  );
};

export default FoodForm;
