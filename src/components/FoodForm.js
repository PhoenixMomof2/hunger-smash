import React from "react";

function FoodForm() {
  return (
    <div>
      <h1>New Meal Form</h1>
      <form>
        <div>
          <input type="text" name="new-food-name" placeholder="Enter Food Name" />
        </div>
        <div>
          <input type="text" name="category" placeholder="Enter Taste Category" />
        </div>
        <div>
          <input type="text" name="img-Url" placeholder="Enter Image Source" />
        </div>
        <div>
          <input type="text" name="description" placeholder="Enter New Meal Description" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default FoodForm;
