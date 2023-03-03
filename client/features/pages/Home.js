import React from 'react';
import { useSelector } from 'react-redux';

import AllPuzzles from './AllPuzzles'

/**
* COMPONENT
*/
const Home = (props) => {
const username = useSelector((state) => state.auth.me.username);

return (
<div>
<h3>Welcome, {username}</h3>
<section><AllPuzzles /></section>
</div>
);
};

export default Home;