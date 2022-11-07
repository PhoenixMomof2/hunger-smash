import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar"
import About from "./About";
import FoodList from "./FoodList";
import FoodForm from "./FoodForm";

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/foods">
            <FoodList />
          </Route>
          <Route path="/newFoods">
            <FoodForm />
          </Route>
        </Switch>
    </div>
  );
}

export default App;

