import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPuzzles, selectPuzzles } from "../store/allPuzzlesSlice";
import PuzzleCard from "../components/PuzzleCard";
import styles from "../styles/AllPuzzles.module.css";

/**
 * Component for all puzzles
 * @component shows all puzzles on the shop page
 */
const AllPuzzles = () => {
  const dispatch = useDispatch();
  const puzzles = useSelector(selectPuzzles);

  // fetches puzzles on load
  useEffect(() => {
    dispatch(fetchPuzzles());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>All Puzzles</h1>
      <div className={styles.puzzles}>
        {puzzles.map((puzzle) => {
          return <PuzzleCard key={puzzle.id} id={puzzle.id} puzzle={puzzle} />;
        })}
      </div>
    </div>
  );
};

export default AllPuzzles;
