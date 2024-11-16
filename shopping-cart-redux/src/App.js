import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiActions } from "./components/store/ui-updates";
import Notification from "./components/UI/Notification";
import { cartActions } from "./components/store/cart-items";

let isInitial = true;

function App() {
  const toggleCart = useSelector((state) => state.ui.toggleCart);
  const cart = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.ui.notification);
  const changed = useSelector((state) => state.cart.changed);

  const dispatch = useDispatch();

  useEffect(() => {
    const callFetch = async () => {
      dispatch(
        uiActions.showNotification({
          status: "Pending",
          title: "Sending",
          message: "Sending....",
        })
      );

      try {
        await fetch(process.env.REACT_APP_FIREBASE_URL, {
          method: "PUT",
          body: JSON.stringify(cart),
        });
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Cart data sent!",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "Cart data failed to send!",
          })
        );
      }
    };

    if (isInitial) {
      const initialRender = async () => {
        try {
          const response = await fetch(process.env.REACT_APP_FIREBASE_URL);
          const data = await response.json();
          dispatch(cartActions.fetchData(data || []));
          isInitial = false;
        } catch (error) {
          console.log("Error: ", error);
        }
      };
      initialRender();

      return;
    }

    if (changed) {
      callFetch();
    }
  }, [cart, dispatch, changed]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggleCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
