import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  fetchSinglePuzzle,
  selectSinglePuzzle,
} from "../store/singlePuzzleSlice";
import { fetchPuzzles, selectPuzzles } from "../store/allPuzzlesSlice";
import { addOrderItems, addItems } from "../store/orderSlice";
import styles from "../styles/PuzzleDetail.module.css";
import PuzzleCard from "../components/PuzzleCard";

//add AddToCartHandler function and button onClick

const PuzzleDetail = () => {
  const me = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();
  const puzzle = useSelector(selectSinglePuzzle);
  const puzzles = useSelector(selectPuzzles);
  const { id } = useParams();
  const [orderQTY, setOrderQTY] = useState(1);

  useEffect(() => {
    dispatch(fetchSinglePuzzle(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchPuzzles())
  }, [dispatch]);

  const QuantityDropDown = () => {
    let QuantOpts = [];
    for (let i = 1; i <= puzzle?.stockQuantity; i++) {
      QuantOpts.push(i);
    }
    return QuantOpts;
  };

  const handleAdd = async () => {
    if (!me.id) {
      dispatch(addItems({ puzzleId: id, orderQTY, puzzle }));
    } else {
      dispatch(addOrderItems({ id: me.id, puzzleId: id, orderQTY }));
    }
  };

  function PuzzleDisplay() {
    if (!puzzles) {
      return <div>Loading puzzles...</div>
    }
    const selectedPuzzles = useMemo(() => {
      const randomIndexes = new Set();
      while (randomIndexes.size < 3 && randomIndexes.size < puzzles.length) {
        randomIndexes.add(Math.floor(Math.random() * puzzles.length));
      }
      return Array.from(randomIndexes).map((index) => puzzles[index]);
    }, [puzzles]);
  
    return (
      <div className={styles.puzzDisp}>
        {selectedPuzzles.map((puzzle) => (
          <PuzzleCard key={puzzle.id} id={puzzle.id} puzzle={puzzle} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className={styles.container}>
        <img className={styles.img} src={puzzle.imgURL} />
        <section className={styles.rightSide}>
          <div className={styles.text}>
            <h1 className={styles.title}>{puzzle.name}</h1>
            <p className={styles.pieces}>{puzzle.puzzlePieces}</p>
            <p className={styles.price}>${puzzle.price}</p>
            <p className={styles.description}>{puzzle.description}</p>
          </div>
          <div className={styles.addToCart}>
            <select
              className={styles.quantity}
              value={orderQTY}
              onChange={(e) => setOrderQTY(e.target.value)}
            >
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
        </section>
      </div>
      <hr className={styles.line}/>
      <h2 className={styles.morePuz}>More Puzzles You Might Like</h2>
      <section className={styles.rec}>
        <PuzzleDisplay />
      </section>
    </div>
  );
};

export default PuzzleDetail;
