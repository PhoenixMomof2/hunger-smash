import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

 const NavBar = () => {
  return (
    <div>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/foods"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Meals List
      </NavLink>
      <NavLink
        to="/newFoods"
        exact 
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Add New Meal
      </NavLink>
    </div>
  );
}

export default NavBar;
