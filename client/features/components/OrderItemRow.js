import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/OrderItemRow.module.css";

const OrderItemCard = ({ orderItem }) => {
  const puzzle = orderItem.puzzle;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(orderItem.orderQTY);

  const totalPrice = () => {
    return puzzle.price * quantity;
  };

  const handleQtyChange = async (ev) => {
    ev.preventDefault();
    await dispatch(/*updateQuantities from cart slice*/);
    setQuantity(ev.target.value);
  };

  return (
    <div className={styles.container}>
      <img src={puzzle.imgURl} className={styles.image} />
      <div className={styles.leftText}>
        <h2>{puzzle.name}</h2>
        <p>Size: {puzzle.puzzlePieces}</p>
      </div>
      <h2>${puzzle.price}</h2>
      <form className={styles.quantity}>
        <label for="quantity">Quantity</label>
        <input
          name="quantity"
          type="number"
          defaultValue={orderItem.orderQTY}
          onChange={handleQtyChange}
        />
      </form>
      <h2>${totalPrice()}</h2>
      <button>Remove</button>
    </div>
  );
};

export default OrderItemCard;
