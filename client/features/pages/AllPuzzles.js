import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPuzzles, selectPuzzles } from "../store/allPuzzlesSlice";
import PuzzleCard from "../components/PuzzleCard";
import styles from "../styles/AllPuzzles.module.css";

const AllPuzzles = (props) => {
  const dispatch = useDispatch();
  const puzzles = useSelector(selectPuzzles);

  useEffect(() => {
    dispatch(fetchPuzzles());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>All Puzzles</h1>
      <div className="puzzles">
        {puzzles.map((puzzle) => {
          return <PuzzleCard key={puzzle.id} id={puzzle.id} puzzle={puzzle} />;
        })}
      </div>
    </div>
  );
};


export default AllPuzzles;
