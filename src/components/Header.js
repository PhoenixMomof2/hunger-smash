import React from "react";
import image from "../images/hungerSmashLogo.jpg";

function Header() {
  return (
    <header>
      <h1>HUNGER SMASH</h1>
      <img src={image} alt="pic of empty plate" />
    </header>
  );
}
export default Header;
