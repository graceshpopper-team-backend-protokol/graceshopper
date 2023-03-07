import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addOrderItems, addItems } from "../store/orderSlice";
import styles from "../styles/PuzzleCard.module.css";

/**
 * Component for a single puzzle on puzzle overview page
 * @component shows the puzzle data for one puzzle
 * @receives puzzle data as prop
 */
const PuzzleCard = ({ puzzle }) => {
  const me = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();

  /**
   * Click event handler
   * @param {onClick} event
   * @fires when add to cart button is clicked
   * @dispatches an action to the slice and selects whether a user is logged in - dispatching an asyncthunk and updating the database - otherwise it locally updates state
   */
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
