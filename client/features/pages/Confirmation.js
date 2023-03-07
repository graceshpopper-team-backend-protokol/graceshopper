import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Confirmation.module.css"


const Confirmation = () => {
    return (
        <div className={styles.container}>
            <div className="confirmationDiv">
                <h2> Thanks for your order! You'll receive an email confirmation shortly.</h2>
                <Link to='/'> Back to Main Page</Link>
            </div>
        </div>
    )
}

export default Confirmation