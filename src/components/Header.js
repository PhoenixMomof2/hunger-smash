import React from "react";
import image from "../images/hungerSmashLogo.jpg";

function Header() {
  return (
    <div>
      <header>
        <img src={image} alt="pic of empty plate" />
        <h1>HUNGER SMASH</h1>
      </header>
      <br/>
      <hr/>
    </div>
  );
}
export default Header;
