import React from "react";

function FoodCard({ foods }) {
  return (
    <>
      <li className="cards_item">
        <div className="card">
          <div className="card_title">{foods.name}</div>
          <img className="card_image" src={foods.imgUrl} alt={foods.name} />
          <div className="card_content">
            <p className="card_text">{foods.category}</p>
            <div className="card__detail">
              <p>{foods.description}</p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default FoodCard;
