import { useContext } from "react";
import { currencyFormatter } from "../util/currencyFormatter";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
  const { addItem, items, removeItem } = useContext(CartContext);
  const handleAddToCart = () => {
    addItem(meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`../../backend/public/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddToCart}>Add To Cart</Button>
        </p>
      </article>
    </li>
  );
}
