import React from "react";
import styles from "../styles/UserCard.module.css";

/**
 * Component for a userrow in the admin dashboard
 * @component shows userdata for a single user
 */
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
