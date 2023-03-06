import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPuzzles,
  selectPuzzles,
} from "../../features/store/allPuzzlesSlice";
import { deletePuzzleAsync } from "../../features/store/allPuzzlesSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const puzzles = useSelector(selectPuzzles);

  useEffect(() => {
    dispatch(fetchPuzzles());
  }, [dispatch]);

  const handlePuzzleDelete = async (id) => {
    console.log(`id from handlePuzzleDelete ${id}`);
    await dispatch(deletePuzzleAsync(id));
    await dispatch(fetchPuzzles());
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard">
        <Link to="/dashboard/users">
          <strong>View Users</strong>
        </Link>
        <strong>Edit Puzzles</strong>
        <ol>
          {puzzles.map((puzzle) => {
            return (
              <div>
                <p>
                  <strong>Name: </strong>
                  {puzzle.name}
                </p>
                <p>
                  <strong>Description: </strong>
                  {puzzle.description}
                </p>
                <p>
                  <strong>Number of Pieces: </strong>
                  {puzzle.puzzlePieces}
                </p>
                <p>
                  <strong>Price: </strong>
                  {puzzle.price}
                </p>
                <p>
                  <strong>Puzzle ID: </strong>
                  {puzzle.id}
                </p>
                <button
                  id="delete-button"
                  onClick={() => {
                    handlePuzzleDelete(puzzle.id);
                  }}
                >
                  Delete puzzle
                </button>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Dashboard;
