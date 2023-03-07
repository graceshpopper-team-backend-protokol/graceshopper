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

/**
 * Component for the cart
 * @component shows usercart/guestcart
 */
const Cart = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const cart = useSelector(selectOrder) || [];
  const { id } = useSelector((state) => state.auth.me);

  //fetches items for the local or usercart and merges them if necessary
  useEffect(() => {
    if (!id) {
      dispatch(fetchItems());
    } else {
      const localCart = JSON.parse(localStorage.getItem("order"));
      if (localCart && localCart.length) {
        //add all local items into user cart
        for (const item of localCart) {
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

  // function that updates ordertotal based on what elements are in the cart
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

  // function that estimates tax
  const estimateTax = () => {
    const tax = (orderTotal() / 100) * 10;
    return tax.toFixed(2);
  };
  // function that calculates the complete total
  const total = () => {
    const total = Number(estimateTax()) + orderTotal();
    return total.toFixed(2);
  };

  /**
   * Click event handler
   * @param {onClick} event
   * @fires when clear cart is clickes
   * @dispatches an action to the Redux store to clear the entire cart
   */
  const handleClear = async () => {
    if (!id) {
      dispatch(clearItems());
    } else {
      await dispatch(deleteOrderItems(id));
    }
  };

  /**
   * Click event handler
   * @param {onClick} event
   * @fires when continue to purchase is clickes
   */
  const handleNav = () => {
    Navigate("/cart/checkout");
  };

  const RenderCart = () => {
    if (!cart.length) {
      return (
        <div className={styles.emptyContainer}>
          <div className={styles.emptyContent}>
            <h1 className={styles.cartHeaderEmpty}>Your cart is empty.</h1>
            <Link to="/products">
              <h2>Take a look at our curated puzzles to fill it up!</h2>
            </Link>
          </div>
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
            <div className={styles.sums}>
              <span>Subtotal:</span>
              <span>${orderTotal()}</span>
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
              <span>
                <b>Total</b>
              </span>
              <span>
                <b>${total()}</b>
              </span>
            </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={handleNav}>Proceed to Checkout</button>
            <button onClick={handleClear}>Clear Cart</button>
          </div>
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
