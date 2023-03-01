import React from "react";
import { Link } from "react-router-dom";

//should update with header and nav

const Confirmation = () => {
    return (
        <div className="confirmation-container">
            <div className="confirmationDiv">
                <h1> Thanks for your order! You'll receive an email confirmation shortly.</h1>
                <Link to='/'> Back to Main Page</Link>
            </div>
        </div>
    )
}

export default Confirmation