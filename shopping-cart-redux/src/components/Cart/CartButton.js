import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../store";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.items);

  const handleClick = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems.length}</span>
    </button>
  );
};

export default CartButton;
