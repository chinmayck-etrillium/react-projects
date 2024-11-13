import React, { useCallback, useEffect, useRef, useState } from "react";
import QUESTIONS from "../questions.js";
import quizImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const currentlyActiveQuestion =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizComplete = QUESTIONS.length === currentlyActiveQuestion;

  const isSelected = userAnswers[userAnswers.length - 1];

  const handleAnswerSelect = useCallback(
    (answer) => {
      setAnswerState("answered");
      setUserAnswers((prev) => [...prev, answer]);

      setTimeout(() => {
        if (answer === QUESTIONS[currentlyActiveQuestion].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [currentlyActiveQuestion]
  );

  const handleTimeOut = useCallback(() => {
    handleAnswerSelect(null);
  }, [handleAnswerSelect]);

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={quizImg} alt="quiz completed" />
        <h2>Quiz Complete</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        question={QUESTIONS[currentlyActiveQuestion]}
        answerState={answerState}
        handleAnswerSelect={handleAnswerSelect}
        isSelected={isSelected}
        handleTimeOut={handleTimeOut}
        key={currentlyActiveQuestion}
      />
    </div>
  );
}
