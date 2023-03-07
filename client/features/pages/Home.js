import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPuzzles } from "../store/allPuzzlesSlice";


function PuzzleDisplay({ puzzles }) {
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
    <div>
      {selectedPuzzles.map((puzzle) => (
        <div key={puzzle.id}>
          <Link to={`/puzzles/${puzzle.id}`}>
          <img src={puzzle.imgURL} />
          <h2>{puzzle.name}</h2>
          <h3>{puzzle.price}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

/**
 * COMPONENT
 */
const Home = props => {
  const username = useSelector((state) => state.auth.me.firstName) || "Puzzler";
  const dispatch = useDispatch();
  const puzzles = useSelector((state) => state.puzzles);

  useEffect(() => {
    dispatch(fetchPuzzles())
  }, [dispatch]);

  

  return (
    <div>
      <h3>Welcome, {username}!</h3>
      <img src="https://res.cloudinary.com/graham-media-group/image/fetch/f_auto/q_auto/c_thumb,w_700/https://arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/3ZY5NELK25FVRCE6GNJHN2MV2I.jpg?_a=ATCqVhC0" alt="puzzle pieces"></img>
      <h1>Tagline For Our Puzzle Store</h1>
      <section className="bestsellers">
       <h1>Best Sellers</h1>
       <PuzzleDisplay puzzles={puzzles}/>
      </section>
      <section className="staffpicks">
        <h1>Staff Picks</h1>
        <PuzzleDisplay puzzles={puzzles}/>
      </section>
    </div>
  );
};



export default Home;
