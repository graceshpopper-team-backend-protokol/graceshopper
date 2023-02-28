import React from "react";
//don't forget to change {puzzle.pieces} to what Sarah names the new attribute

const PuzzleCard = ({ puzzle }) => {
  return (
    <div className="cardContainer">
      <img src={puzzle.imgUrl} />
      <div className="cardText">
        <h1>{puzzle.name}</h1>
        <p>{puzzle.pieces}</p>
        <p>{puzzle.price}</p>
      </div>
      <button>
        <span class="material-symbols-outlined">add_shopping_cart</span>
      </button>
    </div>
  );
};

export default PuzzleCard;
