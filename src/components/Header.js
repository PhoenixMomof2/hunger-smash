import React from "react";
import image from "../images/hungerSmashLogo.jpg";

function Header() {
  return (
    <div id="header">
      <header>
      <h1>HUNGER</h1> 
        <img src={image} alt="pic of empty plate" />
        <h1>SMASH</h1>
      </header>
      <br/>
      <hr/>
    </div>
  );
}
export default Header;
