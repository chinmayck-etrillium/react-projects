import { useContext, useEffect, useState } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/currencyFormatter";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { items, addItem, removeItem } = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  return (
    <>
      <Modal
        className="cart"
        open={progress === "cart"}
        onClose={progress === "cart" ? hideCart : null}
      >
        <h2>Your Cart</h2>
        <ul>
          {items.map((item) => {
            return (
              <CartItem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                add={() => addItem(item)}
                remove={() => removeItem(item.id)}
              />
            );
          })}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
          <Button textOnly onClick={hideCart}>
            Close
          </Button>
          {items.length > 0 && (
            <Button onClick={showCheckout}>Go to checkout</Button>
          )}
        </p>
      </Modal>
    </>
  );
}
