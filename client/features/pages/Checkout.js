import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createOrderFromOrderItems,
  createGuestOrder,
  fetchOrderItems,
  selectOrder,
  fetchItems,
} from "../store/orderSlice.js";
import styles from "../styles/Checkout.module.css";
import { selectSingleUser } from "../store/singleUserSlice.js";

//Confirm Order button onClick- function that turns order from PENDING to ORDER
//Confirm Order button onClick- connect to Stripe for payment

const Checkout = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const cart = useSelector(selectOrder);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const { id } = useSelector((state) => state.auth.me);
  const singleUser = useSelector(selectSingleUser);

  const estimateTax = () => {
    const tax = (orderTotal() / 100) * 10;
    return tax.toFixed(2);
  };

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

  const total = () => {
    const total = Number(estimateTax()) + orderTotal();
    return total.toFixed(2);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(fetchItems());
    } else {
      dispatch(fetchOrderItems(id));
    }
  }, [dispatch, id]);

  const checkout = async () => {
    // await fetch(`http://localhost:8080/api/cart/checkout/${id}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ cart }),
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((response) => {
    //     if (response.url) {
    //       window.location.assign(response.url); //Forwarding user to Stripe
    //     }
    //   });
    // fix order total depending on what is being ordered
    if (!isLoggedIn) {
      await dispatch(
        createGuestOrder({
          userId: singleUser.id,
          orderTotal: total(),
          cart,
        })
      );
      Navigate("/cart/confirmation");
    } else {
      await dispatch(createOrderFromOrderItems({ id, orderTotal: total() }));
      Navigate("/cart/confirmation");
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.summaryRight}>
        <h1>Order Summary</h1>
        <div className={styles.infoContainer}>
          <div>
            <span>Subtotal:</span>
            {orderTotal()}
          </div>
          <div>
            <span>Shipping:</span>
            <span>FREE</span>
          </div>
          <div>
            <span>Estimated Tax:</span>
            <span>${estimateTax()}</span>
          </div>
          <div>
            <span>Total:</span>
            <span>${total()}</span>
          </div>
        </div>
        <button variant="success" onClick={checkout}>
          Confirm Order
        </button>
      </section>
    </div>
  );
};

export default Checkout;
