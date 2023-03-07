import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addOrderItems, addItems } from "../store/orderSlice";
import styles from "../styles/PuzzleCard.module.css";
//don't forget to change {puzzle.pieces} to what Sarah names the new attribute

const PuzzleCard = ({ puzzle }) => {
  const me = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();

  const handleAdd = async (puzzleId) => {
    const id = me.id;
    if (!id) {
      dispatch(addItems({ puzzleId, orderQTY: 1, puzzle }));
    } else {
      dispatch(addOrderItems({ id, puzzleId, orderQTY: 1 }));
    }
  };

  return (
    <div className="cardContainer">
      <Link to={`/puzzles/${puzzle.id}`}>
        <img src={puzzle.imgURL} />
        <div className="cardText">
          <h1>{puzzle.name}</h1>
          <p>{puzzle.puzzlePieces}</p>
          <p>${puzzle.price}</p>
        </div>
      </Link>
      <button onClick={() => handleAdd(puzzle.id)}>
        <span className="material-symbols-outlined">add_shopping_cart</span>
      </button>
    </div>
  );
};

export default PuzzleCard;
