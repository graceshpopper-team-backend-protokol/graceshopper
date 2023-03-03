import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSinglePuzzle,
  selectSinglePuzzle,
} from "../store/singlePuzzleSlice";
import { addOrderItems } from "../store/orderSlice";
import styles from "../styles/PuzzleDetail.module.css";

//add AddToCartHandler function and button onClick

const PuzzleDetail = () => {
  const dispatch = useDispatch();
  const puzzle = useSelector(selectSinglePuzzle);
  const { id } = useParams();
  const puzzleId = puzzle.id;
  const [orderQTY, setOrderQTY] = useState(1);

  useEffect(() => {
    dispatch(fetchSinglePuzzle(id));
  }, [dispatch, id]);

  const QuantityDropDown = () => {
    let QuantOpts = [];
    for (let i = 1; i <= puzzle?.stockQuantity; i++) {
      QuantOpts.push(i);
    }
    return QuantOpts;
  };

  const handleAdd = async (ev) => {
    ev.preventDefault();
    dispatch(addOrderItems({ id, puzzleId, orderQTY }));
  };

  return (
    <div className={styles.container}>
      <img className={styles.img} src={puzzle.imgURL} />
      <div className={styles.text}>
        <h1 className={styles.title}>{puzzle.name}</h1>
        <p>{puzzle.puzzlePieces}</p>
        <p>{puzzle.price}</p>
      </div>
      <div className={styles.addToCart}>
        <select className={styles.quantity} value={orderQTY} onChange={(e) => setOrderQTY(e.target.value)}>
          {QuantityDropDown().map((num) => {
            return (
              <option value={num} id={num}>
                {num}
              </option>
            );
          })}
        </select>
        <button onClick={handleAdd}>Add to Cart</button>
      </div>
    </div>
  );
};

export default PuzzleDetail;
