import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchPuzzles, selectPuzzles } from '../../features/store/allPuzzlesSlice';
import PuzzleCard from '../../features/components/PuzzleCard';


const Dashboard = () => {
  const dispatch = useDispatch();
  const puzzles = useSelector(selectPuzzles);
  

  useEffect(() => {
    dispatch(fetchPuzzles());
  }, [dispatch]);

  console.log(`puzzles from dashboard: ${puzzles}`);

    return(
        <div>
            <h1>Dashboard</h1>
            <div className="dashboard">
                {puzzles?.map((puzzle) => {
                return (
                    <div>
                        <p>{puzzle.name}</p>
                        <p>{puzzle.description}</p>
                        <p>{puzzle.puzzlePieces}</p>
                        <p>{puzzle.price}</p>
                        <p>{puzzle.imgUrl}</p>
                    </div>
                  );
                })}
                
            </div>
        </div>
    );
}

export default Dashboard;