import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPuzzles } from "../store/allPuzzlesSlice";
import styles from "../styles/Home.module.css";

function PuzzleDisplay({ puzzles }) {
  if (!puzzles) {
    return <div>Loading puzzles...</div>;
  }
  const selectedPuzzles = useMemo(() => {
    const randomIndexes = new Set();
    while (randomIndexes.size < 3 && randomIndexes.size < puzzles.length) {
      randomIndexes.add(Math.floor(Math.random() * puzzles.length));
    }
    return Array.from(randomIndexes).map((index) => puzzles[index]);
  }, [puzzles]);

  return (
    <div className={styles.puzCard}>
      {selectedPuzzles.map((puzzle) => (
        <div key={puzzle.id}>
          <Link to={`/puzzles/${puzzle.id}`}>
            <img src={puzzle.imgURL} />
            <h2>{puzzle.name}</h2>
            <h3 className={styles.price}>${puzzle.price}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.firstName) || "Puzzler";
  const dispatch = useDispatch();
  const puzzles = useSelector((state) => state.puzzles);

  useEffect(() => {
    dispatch(fetchPuzzles());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.mainImg} src="./images/puzzleMainImg.jpg" />
      </div>
      <h3 className={styles.welcome}>Welcome, {username}!</h3>
      <section className={styles.bestsellers}>
        <h1>Best Sellers</h1>
        <hr className={styles.hr} />
        <PuzzleDisplay puzzles={puzzles} />
      </section>
      <section className={styles.staffpicks}>
        <h1>Staff Picks</h1>
        <hr className={styles.hr} />
        <PuzzleDisplay puzzles={puzzles} />
      </section>
    </div>
  );
};

export default Home;
