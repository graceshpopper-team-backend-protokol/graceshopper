import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Shipping.module.css"

//if isLoggedIn? === true...
//fetch User (and fill in shipping address saved to account)

//add Nav to Confirm Address Button

const Shipping = ({ cart }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate;
  //const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await dispatch(/**/)
    Navigate(to="/cart/checkout/:id/", { state: cart })
  };

  return (
    <div className={styles.container}>
      <h1>Shipping</h1>
      <section className={styles.signIn}>
        <h2>Already have an account?</h2>
        <div>Sign In</div>
      </section>
      <section className={styles.guestCheckOut}>
        <h2>Checkout as a guest</h2>
        <form className={styles.emailForm}>
          <label for="email">Email Address</label>
          <input type="email" name="email" value="email"/>
        </form>
      </section>
      <section className={styles.shipping}>
        <h2>Shipping Address</h2>
        <form className={styles.shippingForm} onSubmit={handleSubmit}>
          <label for="firstName"></label>
          <input for="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          <label for="lastName"></label>
          <input for="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          <label for="address">Address</label>
          <input name="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
          <button type="submit" onClick={handleSubmit}>Confirm Address</button>
        </form>
      </section>
    </div>
  );
};

export default Shipping;