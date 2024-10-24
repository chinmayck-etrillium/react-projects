import { useEffect, useState } from "react";

const TIMER = 3000;

export default function ProgressBar({ onChange }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);
  useEffect(() => {
    if (onChange) {
      const interval = setInterval(() => {
        console.log("Timer Running");
        setRemainingTime((prev) => prev - 10);
      }, 10);

      return () => {
        clearInterval(interval);
        setRemainingTime(TIMER);
      };
    }
  }, [onChange]);
  return <progress value={remainingTime} max={TIMER} />;
}
