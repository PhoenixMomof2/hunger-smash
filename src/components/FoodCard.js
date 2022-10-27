import React from 'react'

 function FoodCard(foods) {
  return (
    <li className="cards_item">
      <div className="card">
        <img 
          src={foods.imgUrl}
          alt={foods.name}
          className="card_image"
        />
        <div className="card_content">
          <div className="card_title">{foods.name}</div>
          <p className="card_text">{foods.category}</p>
          <div className="card__detail">
            <p>
              {foods.description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default FoodCard