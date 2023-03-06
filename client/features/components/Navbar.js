import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      <h1>Backend Protokol Puzzles</h1>
      <nav>
        {isLoggedIn ? (
          isAdmin ? (
          <div className={styles.container}>
            {/* The navbar will show these links after Admin is logged in */}
                <Link to="/home">Home</Link>
                <Link to="/puzzles" className="navLink">Shop</Link>
                <Link to="/cart" className="navLink">Cart</Link>
                <Link to="/dashboard" className="navLink">Dashboard</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
            ) : (
          <div className={styles.container}>
            {/* The navbar will show these links after User is logged in */}
                <Link to="/home">Home</Link>
                <Link to="/puzzles" className="navLink">Shop</Link>
                <Link to="/cart" className="navLink">Cart</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) 
        ) : (
          <div className={styles.container}>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/cart">Cart</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
