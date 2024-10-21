import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const [result, setResult] = useState();
  let timer = useRef();
  let modal = useRef();

  let isActive = timeRemaining < targetTime * 1000 && timeRemaining > 0;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setResult(timeRemaining);
    modal.current.open();
    setTimeRemaining(targetTime * 1000);
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    modal.current.open();
    setResult(timeRemaining);
    setTimeRemaining(targetTime * 1000);
  };

  return (
    <>
      <ResultModal ref={modal} targetTime={targetTime} result={result} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={isActive ? handleStop : handleStart}>
          {isActive ? "Stop Timer!" : "Start timer!"}
        </button>
        <p className={isActive ? "active" : undefined}>
          {isActive ? "Time is running...." : "Start timer!"}
        </p>
      </section>
    </>
  );
}
