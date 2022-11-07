import React from "react";

function FoodForm() {
  return (
    <div>
      <br />
      <h2>New Meal Form</h2>
      <form>
        <div>
          <input
            type="text"
            name="new-food-name"
            placeholder="Enter Food Name"
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            name="category"
            placeholder="Enter Taste Category"
          />
        </div>
        <br />
        <div>
          <input type="text" name="img-Url" placeholder="Enter Image Source" />
        </div>
        <br />
        <div>
          <input
            type="text"
            name="description"
            placeholder="Enter New Meal Description"
          />
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default FoodForm;
