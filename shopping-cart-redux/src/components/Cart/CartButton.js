import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../store/ui-updates";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.cart.items);

  const handleClick = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>
        {totalItems ? totalItems.length : 0}
      </span>
    </button>
  );
};

export default CartButton;
