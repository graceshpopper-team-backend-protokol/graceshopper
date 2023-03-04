import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrderItems,
  fetchOrderItems,
  selectOrder,
} from "../store/orderSlice.js";
import styles from "../styles/Cart.module.css";
import OrderItemRow from "../components/OrderItemRow.js";

//needs to pass down cart(Order) and userId on Nav

const Cart = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const cart = useSelector(selectOrder);
  const { id } = useSelector((state) => state.auth.me);

  useEffect(() => {
    dispatch(fetchOrderItems(id));
  }, [dispatch, id]);

  const estimateTax = (cart) => {
    return (cart.order.orderTotal / 100) * 10;
  };

  const total = (cart) => {
    return estimateTax() + cart.order.orderTotal;
  };

  const handleClear = async () => {
    await dispatch(deleteOrderItems(id));
  };

  const handleNav = () => {
    //also pass down user Id through Navigate
    Navigate("/cart/shipping", { state: cart });
  };

  const RenderCart = () => {
    if (!cart) {
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
        <h1>There are {cart.length} items in your cart.</h1>
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
            {/* <div>
              <span>Subtotal:</span>
              <span>${cart.order[0].orderTotal}</span>
            </div> */}
            {/*
            <div>
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div>
              <span>Estimated Tax</span>
              <span>${estimateTax(cart)}</span>
            </div>
            <div>
              <span>Total</span>
              <span>${total(cart)}</span>
            </div> */}
          </div>
          <button onClick={handleNav}>Proceed to Shipping</button>
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
