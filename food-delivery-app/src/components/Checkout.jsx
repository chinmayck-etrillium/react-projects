import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/currencyFormatter";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "./hooks/useHttp";

const CONFIG = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const { items, emptyCart } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);

  const { fetchData } = useHttp("http://localhost:3000/orders", CONFIG);

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd);

    //email validation
    const emailValidation = () => {
      let re = /\S+@\S+\.\S+/;
      if (re.test(formData.email)) {
        const temp = JSON.stringify({
          order: {
            items: items,
            customer: formData,
          },
        });

        CONFIG.body = temp;

        fetchData();
        emptyCart();
        hideCheckout();
        items;
      }
    };

    emailValidation();
  };

  return (
    <Modal
      open={progress === "checkout"}
      onClose={progress === "checkout" ? hideCheckout : null}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount:{currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" id="name" type="text" />
        <Input label="Email" id="email" type="email" />
        <Input label="Street" id="street" type="text" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={hideCheckout}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
