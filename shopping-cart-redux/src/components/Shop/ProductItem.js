import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../store/cart-items";

const ProductItem = (props) => {
  const { title, price, description } = props;

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(
      cartActions.addNewItem({ title, price, description, quantity: 1 })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
