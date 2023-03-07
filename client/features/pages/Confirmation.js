import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Confirmation.module.css";

/**
 * Component to show a confirmed page upon a successful order
 * @component shows a controlled react form
 */
const Confirmation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.confirmationDiv}>
        <h2>
          Thanks for your order! You'll receive an email confirmation shortly.
        </h2>
        <Link to="/"> Back to Main Page</Link>
      </div>
    </div>
  );
};

export default Confirmation;
