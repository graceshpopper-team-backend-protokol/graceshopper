import React, { useEffect } from "react";

import PuzzleCard from "../components/PuzzleCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchPuzzles, selectPuzzles } from "../store/allPuzzlesSlice";



const AllPuzzles = () => {
  const dispatch = useDispatch();
  const puzzles = useSelector(selectPuzzles);
  console.log(`from useSelector: ${puzzles}`)
 
  useEffect(() => {
    dispatch(fetchPuzzles());
  }, [dispatch]);

  return (
    <div>
      <h1>All Puzzles</h1>
      <div className="puzzles">
        {puzzles?.map((puzzle) => {
          return (
            <PuzzleCard key={puzzle.id} id={puzzle.id} puzzle={puzzle} />
          );
        })}
      </div>
    </div>
  );
};

export default AllPuzzles;