import { useDispatch,useSelector } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "./store";

const Auth = () => {
  const isAuth = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd);

    if (
      formData.email === "chinmayck20@gmail.com" &&
      formData.password === "1234"
    ) {
      dispatch(authActions.login());
      console.log(isAuth)
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
