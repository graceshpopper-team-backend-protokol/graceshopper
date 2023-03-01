import React from 'react';
import { useSelector } from 'react-redux';
import AllPuzzles from './AllPuzzles';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <AllPuzzles />
    </div>
  );
};

export default Home;
