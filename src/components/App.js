import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar"
import About from "./About";
import FoodList from "./FoodList";
import FoodForm from "./FoodForm";

const App = () => {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // console.log("Using useEffect");
    fetch("http://localhost:3001/foods")
      .then((res) => res.json())
      .then((foods) => setFoods(foods));
      
  }, []);

function handleAddNewFood(newFood){
  setFoods([...foods, newFood]) // Updating foods state.
 }
  return (
    <div>
      <Header />
      <br/>
      <NavBar />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/foods">
            <FoodList foods={foods}/>
          </Route>
          <Route exact path="/newFoods">
            <FoodForm handleAddNewFood={handleAddNewFood}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;

