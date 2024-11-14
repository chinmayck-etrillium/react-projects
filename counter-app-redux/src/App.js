import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.authenticated);
  return (
    <Fragment>
      {isAuth && <Header />}
      {console.log("isAuth", isAuth)}
      {isAuth && <UserProfile />}
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default App;
