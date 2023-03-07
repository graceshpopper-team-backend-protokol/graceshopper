import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/OrderItemRow.module.css";
import { editOrderItems, editItems } from "../store/orderSlice";

/**
 * Component for a row in the cart
 * @component shows the amount of puzzles in the cart
 * @receives the orderitem object as a prop
 */
const OrderItemCard = ({ orderItem }) => {
  const puzzle = orderItem.puzzle;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(orderItem.orderQTY);
  const { id } = useSelector((state) => state.auth.me);

  // sets quantity state based on the prop passed
  useEffect(() => {
    setQuantity(orderItem.orderQTY);
  }, [orderItem]);

  // calculates price
  const totalPrice = () => {
    return puzzle.price * quantity;
  };

  /**
   * Onclick event handler
   * @param {onChange} event
   * @fires when quantity is changed
   * sets state
   */
  const handleQtyChange = async (ev) => {
    ev.preventDefault();
    setQuantity(ev.target.value);
  };

  /**
   * Edit quantity in cart event handler
   * @param {onClick} event
   * @fires when update button is clicked
   * @dispatches an action to the Redux store that changes the orderQTY on the orderItem
   */
  const handleEdit = async () => {
    if (!id) {
      dispatch(editItems({ puzzleId: puzzle.id, orderQTY: quantity }));
    } else {
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
    }
  };
  /**
   * Click event handler
   * @param {onClick} event
   * @fires when remove button is clicked
   * @dispatches an action to the Redux store to delete the puzzle from the order
   */
  const handleDelete = async () => {
    if (!id) {
      dispatch(editItems({ puzzleId: puzzle.id, orderQTY: 0 }));
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

  return (
    <div className={styles.container}>
      <img src={puzzle.imgURL} className={styles.image} />
      <div className={styles.leftText}>
        <h2 className={styles.name}>{puzzle.name}</h2>
        <p>Size: {puzzle.puzzlePieces}</p>
      </div>
      <h2>${puzzle.price}</h2>
      <form className={styles.quantity}>
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
