import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/OrderItemRow.module.css";
import { editOrderItems } from "../store/orderSlice";

const OrderItemCard = ({ orderItem }) => {
  const puzzle = orderItem.puzzle;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(orderItem.orderQTY);
  const { id } = useSelector((state) => state.auth.me);

  useEffect(() => {
    setQuantity(orderItem.orderQTY);
  }, [orderItem]);

  const totalPrice = () => {
    return puzzle.price * quantity;
  };

  const handleQtyChange = async (ev) => {
    ev.preventDefault();
    setQuantity(ev.target.value);
  };

  const handleEdit = async () => {
    if (quantity > 0) {
      await dispatch(
        editOrderItems({ id, puzzleId: puzzle.id, orderQTY: quantity })
      );
    } else {
      await dispatch(
        editOrderItems({
          id,
          puzzleId: puzzle.id,
          orderQTY: quantity,
          orderId: null,
        })
      );
    }
  };
  const handleDelete = async () => {
    await dispatch(
      editOrderItems({
        id,
        puzzleId: puzzle.id,
        orderQTY: quantity,
        orderId: null,
      })
    );
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
        <label htmlFor="quantity">Quantity</label>
        <input
          name="quantity"
          type="number"
          defaultValue={orderItem.orderQTY}
          onChange={handleQtyChange}
        />
        <button onClick={handleEdit}>Update</button>
      </form>
      <h2>${totalPrice()}</h2>
      <button onClick={handleDelete}>Remove</button>
    </div>
  );
};

export default OrderItemCard;
