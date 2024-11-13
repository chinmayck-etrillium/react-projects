import React, { useEffect, useState } from "react";

const TIMELIMIT = 5000;

export default function ProgressBar({ onTimeOut }) {
  const [remainingTime, setRemianingTime] = useState(TIMELIMIT);

  useEffect(() => {
    console.log("Timeout");
    const timer = setTimeout(onTimeOut, TIMELIMIT);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut]);

  useEffect(() => {
    console.log("Timeinterval");
    const timer = setInterval(() => {
      setRemianingTime((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <progress value={remainingTime} max={TIMELIMIT}></progress>
    </>
  );
}
