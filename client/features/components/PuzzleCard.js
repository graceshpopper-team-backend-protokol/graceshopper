import React from "react";
import { Link, useParams } from "react-router-dom";
//don't forget to change {puzzle.pieces} to what Sarah names the new attribute

const PuzzleCard = ({ puzzle }) => {

  const orderQTY = 1;
  const { id } = useParams;
  const puzzleId = puzzle.id;

  const handleAdd = async (ev) => {
    ev.preventDefault();
    dispatch(addOrderItems({ id, puzzleId, orderQTY }));
  };

  return (
    <div className="cardContainer">
    <Link to={`/puzzles/${puzzle.id}`}>
      <img src={puzzle.imgUrl} />
      <div className="cardText">
        <h1>{puzzle.name}</h1>
        <p>{puzzle.puzzlePieces}</p>
        <p>{puzzle.price}</p>
      </div>
       </Link>
      <button onClick={handleAdd}>
        <span className="material-symbols-outlined">add_shopping_cart</span>
      </button>
    </div>
  );
};

export default PuzzleCard;
