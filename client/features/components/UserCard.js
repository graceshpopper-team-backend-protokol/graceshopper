import React from "react";
import styles from "../styles/UserCard.module.css";

const UserCard = ({ user }) => {
  return (
    <div className={styles.container}>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      {user.isAdmin ? <p>Admin</p> : null}
      <p>{user.username}</p>
      <p>{user.address}</p>
    </div>
  );
};

export default UserCard;
