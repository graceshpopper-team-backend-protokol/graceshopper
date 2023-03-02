import React from "react";
import styles from "../styles/UserCard.module.css"

const UserCard = ({ user }) => {
  <div className={styles.container}>
    <h1>{user.firstName}, {user.lastName}</h1>
    <p>{user.username}</p>
    <p>{user.address}</p>
    <p>{user.userType}</p>
  </div>
};

export default UserCard;