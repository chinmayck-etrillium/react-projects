import Answers from "./Answers";
import ProgressBar from "./ProgressBar";

export default function Question({
  question,
  handleTimeOut,
  isSelected,
  answerState,
  handleAnswerSelect,
}) {

  return (
    <div id="questions">
      <ProgressBar onTimeOut={handleTimeOut} />
      <h2>{question.text}</h2>
      <Answers
        answers={question.answers}
        selectedAnswer={isSelected}
        answerState={answerState}
        handleAnswerSelect={handleAnswerSelect}
      />
    </div>
  );
}
