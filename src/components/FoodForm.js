import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

const FoodForm = ({ handleAddNewFood }) => {
  // const category = categoryList.map(category)=>
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  // const history = useHistory();

  const newFoodData = {
    name,
    imgUrl,
    category,
    description,
  };

  console.log(newFoodData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target, "submit handled")
    console.log(name)
    // fetch("http://localhost:3000/foods", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newFoodData),
    // })
    //   .then((res) => res.json())
    //   .then((newFood) => console.log(newFood)); // update state
  };
  // clear form?

  return (
    <div>
      <br />
      <h2>Add New Meal</h2>
      <form className="NewFood" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="new-food-name">New Food Name: </label>
          <input
            type="text"
            id="new-food-name"
            placeholder="Enter Food Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="category">New Taste Category: </label>
          <input
            type="text"
            id="category"
            placeholder="Enter Taste Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="img-Url">New Meal Image Source: </label>
          <input
            type="text"
            id="img-Url"
            placeholder="Enter Image Source"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="description">New Meal Description: </label>
          <input
            type="text"
            id="description"
            placeholder="Enter New Meal Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br />
        <label htmlFor="submit">Submit New Meal: </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FoodForm;
