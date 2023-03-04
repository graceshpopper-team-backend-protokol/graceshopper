import React from 'react';

const Dashboard = ( { puzzle }) => {
    return(
        <div>
            <h3>Dashboard</h3>
            <div className="dashboard">
                <h1>{puzzle.name}</h1>
                <p>{puzzle.description}</p>
                <p>{puzzle.puzzlePieces}</p>
                <p>{puzzle.price}</p>
                <p>{puzzle.imgUrl.defaultValue}</p>
                

            </div>
        </div>
    );
}

export default Dashboard;