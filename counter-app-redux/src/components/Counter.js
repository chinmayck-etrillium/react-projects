import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/index";
import classes from "./Counter.module.css";
import "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(counterActions.increment());
  };

  const handleDec = () => {
    dispatch(counterActions.decrement());
  };

  const handleRandom = () => {
    dispatch(counterActions.random(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <button className="btn" onClick={handleInc}>
        Increment
      </button>
      <button className={classes.btn} onClick={handleRandom}>
        Increase by 5
      </button>
      <button className={classes.btn} onClick={handleDec}>
        Decrement
      </button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
