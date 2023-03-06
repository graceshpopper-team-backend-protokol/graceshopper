import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../styles/Shipping.module.css";
import AuthForm from "../auth/AuthForm";

//if isLoggedIn? === true...
//fetch User (and fill in shipping address saved to account)

//add Nav to Confirm Address Button

const Shipping = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("email");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    //await dispatch(/*update user with address*/);
    Navigate("/cart/checkout", { username: { email } });
  };

  return (
    <div className={styles.container}>
      <h1>Shipping</h1>
      {!isLoggedIn ? (
        <div>
          <section className={styles.guestCheckOut}>
            <h2>Checkout as a guest</h2>
            <form className={styles.emailForm}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </form>
          </section>
          <section className={styles.shipping}>
            <h2>Shipping Address</h2>
            <form className={styles.shippingForm} onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="address">Address</label>
              <input
                name="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button type="submit" onClick={handleSubmit}>
                Confirm Address
              </button>
            </form>
          </section>
          <section className={styles.signIn}>
            <h2>Already have an account?</h2>
            <AuthForm name="login" displayName="Login" />
          </section>
          <section className={styles.signIn}>
            <h2>Create an Account?</h2>
            <AuthForm name="signup" displayName="Sign Up" />
          </section>
        </div>
      ) : (
        <section className={styles.shipping}>
          <h2>Shipping Address</h2>
          <form className={styles.shippingForm} onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="address">Address</label>
            <input
              name="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
              Confirm Address
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default Shipping;
