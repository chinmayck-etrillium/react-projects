import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  let userLost = result <= 0;
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog className="result-modal" ref={dialog}>
      {userLost ? <p>You lost!</p> : <p>You Won!</p>}
      {userLost ? (
        <h2>
          Your Score is : 0!
        </h2>
      ) : (
        <h2>
          Your Score is :
          {parseInt(((targetTime * 1000 - result) / (targetTime * 1000)) * 100)}
          !
        </h2>
      )}
      <p>
        The target time was <strong>{targetTime}</strong> seconds and you
        stopped timer at {result / 1000} seconds remaining!
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
