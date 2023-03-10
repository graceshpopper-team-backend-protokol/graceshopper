import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPuzzles,
  selectPuzzles,
} from "../../features/store/allPuzzlesSlice";
import { deletePuzzleAsync } from "../../features/store/allPuzzlesSlice";
import AddPuzzle from "./AddPuzzle";
import styles from "./Dashboard.module.css";

/**
 * Component for the admin dashboard
 * @component shows puzzles, including edit puzzle and delete puzzle links
 */
const Dashboard = () => {
  const dispatch = useDispatch();
  const puzzles = useSelector(selectPuzzles);

  // fetches all puzzles on load
  useEffect(() => {
    dispatch(fetchPuzzles());
  }, [dispatch]);

  /**
   * Click event handler
   * @param {onClick} event
   * @fires when delete button is clicked
   * @dispatches an action to the Redux store to delete the specified puzzle from the database
   * @fetches the data from the database to refresh the page
   */
  const handlePuzzleDelete = async (id) => {
    await dispatch(deletePuzzleAsync(id));
    await dispatch(fetchPuzzles());
  };

  return (
    <div>
      <div className={styles.dashboard}>
        <h1>Dashboard</h1>
        <hr />
        <br />
        <Link to={`/dashboard/users`}>Click Here to View All Users</Link>
        <div className={styles.addPuzzle}>
          <AddPuzzle />
        </div>
        <hr />
        <h3>Edit Existing Puzzles</h3>
        <ol>
          {puzzles.map((puzzle) => {
            return (
              <div className={styles.listings}>
                <div>
                  <Link to={`/dashboard/puzzles/${puzzle.id}`}>
                    Edit Puzzle
                  </Link>
                </div>
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
