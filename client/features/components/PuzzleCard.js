import React from "react";
import { Link } from "react-router-dom";
//don't forget to change {puzzle.pieces} to what Sarah names the new attribute

const PuzzleCard = ({ puzzle }) => {
  return (
    <div className="cardContainer">
      <Link to={`/puzzles/${puzzle.id}`}>
        <img src={puzzle.imgURL} />
        <div className="cardText">
          <h1>{puzzle.name}</h1>
          <p>{puzzle.puzzlePieces}</p>
          <p>{puzzle.price}</p>
        </div>
      </Link>
      <button>
        <span className="material-symbols-outlined">add_shopping_cart</span>
      </button>
    </div>
  );
};

export default PuzzleCard;
