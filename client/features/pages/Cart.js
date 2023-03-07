import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrderItems,
  fetchItems,
  fetchOrderItems,
  selectOrder,
  clearItems,
  addOrderItems,
} from "../store/orderSlice.js";
import styles from "../styles/Cart.module.css";
import OrderItemRow from "../components/OrderItemRow.js";

//needs to pass down cart(Order) and userId on Nav

const Cart = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const cart = useSelector(selectOrder) || [];
  const { id } = useSelector((state) => state.auth.me);

  useEffect(() => {
    if (!id) {
      dispatch(fetchItems());
    } else {
      const localCart = JSON.parse(localStorage.getItem("order"));
      if (localCart.length > 0) {
        //add all local items into user cart
        for (const item of cart) {
          dispatch(
            addOrderItems({
              id,
              puzzleId: item.puzzleId,
              orderQTY: item.orderQTY,
            })
          );
        }
        localStorage.removeItem("order");
        dispatch(fetchOrderItems(id));
      } else {
        dispatch(fetchOrderItems(id));
      }
    }
  }, [dispatch, id]);

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

  const estimateTax = () => {
    const tax = (orderTotal() / 100) * 10;
    return tax.toFixed(2);
  };

  const total = () => {
    const total = Number(estimateTax()) + orderTotal();
    return total.toFixed(2);
  };

  const handleClear = async () => {
    if (!id) {
      dispatch(clearItems());
    } else {
      await dispatch(deleteOrderItems(id));
    }
  };

  const handleNav = () => {
    //also pass down user Id through Navigate
    Navigate("/cart/checkout");
  };

  const RenderCart = () => {
    if (!cart.length) {
      return (
        <div>
          <h1>Your cart is empty.</h1>
          <Link to="/products">
            <h2>Take a look at our curated puzzles to fill it up!</h2>
          </Link>
        </div>
      );
    }
    return (
      <div>
        <h1>There are {cart.length} item(s) in your cart.</h1>
        <section className={styles.itemsLeft}>
          <div className={styles.banner}>
            <h2>Puzzle</h2>
            <h2>Puzzle Price</h2>
            <h2>Quantity</h2>
            <h2>Total Price</h2>
          </div>
          <section className={styles.items}>
            {cart.map((orderItem) => {
              return (
                <OrderItemRow
                  key={orderItem.id}
                  id={orderItem.id}
                  orderItem={orderItem}
                />
              );
            })}
          </section>
        </section>
        <section className={styles.summaryRight}>
          <h1>Order Summary</h1>
          <div className={styles.infoContainer}>
            <div>
              <span>Subtotal:</span>
              <span>${orderTotal()}</span>
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
              <span>Total</span>
              <span>${total()}</span>
            </div>
          </div>
          <button onClick={handleNav}>Proceed to Checkout</button>
          <button onClick={handleClear}>Clear Cart</button>
        </section>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <RenderCart />
    </div>
  );
};

export default Cart;
