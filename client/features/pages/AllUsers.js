import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, selectUsers } from "../store/allUsersSlice"
import UserCard from "../components/UserCard";
import styles from "../styles/AllUsers.module.css"

const AllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>All Users</h1>
      <div className={styles.userMap}>
        {users?.map((user) => {
          return (
            <UserCard key={user.id} id={user.id} user={user}/>
          );
        })}
      </div>
    </div>
  )
}