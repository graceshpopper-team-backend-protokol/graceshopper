import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createOrderFromOrderItems,
  createGuestOrder,
  fetchOrderItems,
  selectOrder,
  fetchItems,
} from "../store/orderSlice.js";
import styles from "../styles/Checkout.module.css";
import {
  selectSingleUser,
  createOrUpdateUser,
} from "../store/singleUserSlice.js";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

/**
 * Component to checkout
 * @component shows an order confirmation page that leads to stripe
 */
const Checkout = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const cart = useSelector(selectOrder);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const { id } = useSelector((state) => state.auth.me);
  const singleUser = useSelector(selectSingleUser);

  /**
   * function that calculates random tax amount
   * @returns number fixed to two decimals
   */
  const estimateTax = () => {
    const tax = (orderTotal() / 100) * 10;
    return tax.toFixed(2);
  };

  /**
   * function that calculates the order subtotal
   * @returns number
   */
  const orderTotal = () => {
    let prices = [];
    cart.forEach((orderItem) => {
      prices.push(Number(orderItem.puzzle.price) * orderItem.orderQTY);
    });
    let total = 0.0;
    for (let i = 0; i < prices.length; i++) {
      total += prices[i];
    }
    return total;
  };

  /**
   * function that calculates the total
   * @returns number fixed to two decimals
   */
  const total = () => {
    const total = Number(estimateTax()) + orderTotal();
    return total.toFixed(2);
  };

  // fetches items on load
  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(fetchItems());
    } else {
      dispatch(fetchOrderItems(id));
    }
  }, [dispatch, id]);

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  // stripe integration through an ajax database request
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:8080/api/stripe", {
          tokenId: stripeToken.id,
          amount: total() * 100,
        });
        checkout(res, stripeToken);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  // function that creates or updates a user based on the provided email
  // then creates an order for the guest or user
  const checkout = async (res, stripeToken) => {
    await dispatch(
      createOrUpdateUser({
        username: stripeToken.email,
        address: res.data.billing_details.address.line1,
      })
    );
    if (!isLoggedIn) {
      await dispatch(
        createGuestOrder({
          userId: singleUser.id,
          orderTotal: total(),
          cart,
        })
      );
    } else {
      await dispatch(createOrderFromOrderItems({ id, orderTotal: total() }));
    }
    Navigate("/cart/confirmation");
  };

  return (
    <div className={styles.container}>
      <section className={styles.summaryRight}>
        <h1>Order Summary</h1>
        <div className={styles.infoContainer}>
          <div className={styles.sums}>
            <span>Subtotal:</span>
            {orderTotal()}
          </div>
          <div className={styles.sums}>
            <span>Shipping:</span>
            <span>FREE</span>
          </div>
          <div className={styles.sums}>
            <span>Estimated Tax:</span>
            <span>${estimateTax()}</span>
          </div>
          <div className={styles.sums}>
            <span>Total:</span>
            <span>${total()}</span>
          </div>
        </div>
        <StripeCheckout
          name="Backend Protokol Puzzles"
          image="https://em-content.zobj.net/source/microsoft-teams/337/puzzle-piece_1f9e9.png"
          billingAddress
          shippingAddress
          amount={total() * 100}
          token={onToken}
          stripeKey="pk_test_51MhZmKE8zFmeoXQYlqTnTbKRyX37PqhCKLpqJK1Gw8czZgZA7ldRQJvtw42YVP99UBZIQnatJyYrjors74yG1gDh00mzei90C0"
          label="Pay with 💳"
        >
          <button>Payment Method</button>
        </StripeCheckout>
      </section>
    </div>
  );
};

export default Checkout;
