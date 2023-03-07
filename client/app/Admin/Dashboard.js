import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPuzzles,
  selectPuzzles,
} from "../../features/store/allPuzzlesSlice";
import { deletePuzzleAsync } from "../../features/store/allPuzzlesSlice";
import AddPuzzle from "./AddPuzzle";

const Dashboard = () => {
  const dispatch = useDispatch();
  const puzzles = useSelector(selectPuzzles);

  useEffect(() => {
    dispatch(fetchPuzzles());
  }, [dispatch]);

  const handlePuzzleDelete = async (id) => {
    await dispatch(deletePuzzleAsync(id));
    await dispatch(fetchPuzzles());
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="dashboard">
        <Link to={`/dashboard/users`}>View Users</Link>
        <AddPuzzle />
        <h3>Edit Existing Puzzles</h3>
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

                <Link to={`/dashboard/puzzles/${puzzle.id}`}>Edit Puzzle</Link>

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
