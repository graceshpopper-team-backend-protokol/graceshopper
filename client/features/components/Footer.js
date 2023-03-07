import React from "react";
import styles from "../styles/Footer.module.css";

/**
 * Component for the footer
 * @component shows the footer
 */
const Footer = () => {
  return (
    <div id="footer" className={styles.container}>
      <p>© 2023 Backend Protokol Puzzles</p>
    </div>
  );
};

export default Footer;
