import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  handleAnswerSelect,
}) {
  const shuffledAnswer = useRef();

  if (!shuffledAnswer.current) {
    shuffledAnswer.current = [...answers];
    shuffledAnswer.current.sort(() => Math.random() - 0.5);
    console.log(shuffledAnswer);
  }
  return (
    <ul id="answers">
      {shuffledAnswer.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState == "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => handleAnswerSelect(answer)}
              className={cssClass}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
