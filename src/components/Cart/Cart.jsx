import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = () => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: 1, name: "Sushi", amount: 3, price: "11.11" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>33.77</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;