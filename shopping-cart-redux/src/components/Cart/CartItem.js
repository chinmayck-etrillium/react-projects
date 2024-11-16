import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../store/cart-items";


const CartItem = (props) => {
  const { title, quantity, price } = props.item;
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(cartActions.decreaseQuantity({ title, quantity, price }));
  };

  const handleIncrement = () => {
    dispatch(cartActions.increaseQuantity({ title, quantity, price }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price * quantity.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
