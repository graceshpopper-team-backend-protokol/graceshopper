import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Checkout.module.css";

//Confirm Order button onClick- function that turns order from PENDING to ORDER
//Confirm Order button onClick- connect to Stripe for payment

const Checkout = ({ cart }) => {
  
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const checkout = async () => {
    await fetch('http://localhost:8080/cart/checkout/:id', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({cart: cart.orderItems})
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.url) {
        window.location.assign(response.url); //Forwarding user to Stripe
      }
    });
    await dispatch(/*thunk */);
    Navigate('/confirmation')
    
  }

  return (
    <div className={styles.container}>
      <section className={styles.summaryRight}>
        <h1>Order Summary</h1>
        <div className={styles.infoContainer}>
          <div>
            <span>Subtotal:</span>
            <span>${cart.order.orderTotal}</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <div>
            <span>Estimated Tax</span>
            <span>${estimateTax()}</span>
          </div>
          <div>
            <span>Total</span>
            <span>${total()}</span>
          </div>
        </div>
        <button variant="success" onClick={checkout}>Confirm Order</button>
      </section>
    </div>
  );
};

export default Checkout;
