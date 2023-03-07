import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPuzzle } from "../../features/store/singlePuzzleSlice";
import { fetchPuzzles } from "../../features/store/allPuzzlesSlice";

/**
 * Component to add a puzzle to the database
 * @component shows a controlled react form
 */
const AddPuzzle = () => {
  const dispatch = useDispatch();

  //set state for Form components to create a controlled React form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stockQuantity, setStockQuantity] = useState(0);
  const [imgURL, setImgURL] = useState("");
  const [puzzlePieces, setPuzzlePieces] = useState("250 pieces");
  const [price, setPrice] = useState(0.0);
  const [stripeId, setStripeId] = useState("");

  /**
   * Form submit event handler
   * @param {onSubmit} event
   * @fires when submit button is clicked
   * @dispatches an action to the Redux store to add a puzzle to the database
   * @fetches the data from the database to refresh the page
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(
      createPuzzle({
        name,
        description,
        stockQuantity,
        imgURL,
        puzzlePieces,
        price,
        stripeId,
      })
    );
    //this fetches the list of puzzles with the new puzzle added
    await dispatch(fetchPuzzles());
    //resets form to blank
    setName("");
    setDescription("");
    setStockQuantity(0);
    setImgURL("");
    setPuzzlePieces("250 pieces");
    setPrice(0.0);
    setStripeId("");
  };

  return (
    <div id="add-puzzle">
      <h2>Add a New Puzzle</h2>

      <form id="add-puzzle-form" onSubmit={handleSubmit}>
        <label htmlFor="puzzleName">
          <strong>New Puzzle Name:</strong>
        </label>
        <input
          type="text"
          name="puzzleName"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label htmlFor="description">
          <strong>Description:</strong>
        </label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows="5"
          cols="50"
        ></textarea>
        <label htmlFor="puzzleName">
          <strong>Stock Quantity:</strong>
        </label>
        <input
          type="text"
          name="stockQuantity"
          value={stockQuantity}
          onChange={(event) => setStockQuantity(event.target.value)}
        ></input>
        <label htmlFor="imageUrl">
          <strong>ImageUrl:</strong>
        </label>
        <textarea
          type="text"
          name="imgUrl"
          value={imgURL}
          onChange={(event) => setImgURL(event.target.value)}
          rows="1"
          cols="70"
        ></textarea>
        <label htmlFor="puzzlePieces">
          <strong>Number of Pieces:</strong>
          <div className="select-options">
            <select
              name="sort"
              onChange={(event) => setPuzzlePieces(event.target.value)}
            >
              <option value="null"> </option>
              <option value="250 pieces">250 pieces</option>
              <option value="500 pieces">500 pieces</option>
              <option value="1000 pieces">1000 pieces</option>
            </select>
          </div>
        </label>
        <label htmlFor="price">
          <strong>Price:</strong>
        </label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        ></input>
        <label htmlFor="stripeId">
          <strong>Stripe Id:</strong>
        </label>
        <input
          type="text"
          name="stripeId"
          value={stripeId}
          onChange={(event) => setStripeId(event.target.value)}
        ></input>
        <br></br>
        <button type="submit">Submit New Puzzle</button>
      </form>
    </div>
  );
};

export default AddPuzzle;
