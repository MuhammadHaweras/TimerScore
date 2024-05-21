import { React, forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;

  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  const timeLeft = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className="result-modal" ref={dialog}>
      {userLost && <h2> You Lost! </h2>}
      {!userLost && <h2> You Score is: {score} </h2>}
      <p>
        The target time was <strong>{targetTime} </strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>{timeLeft} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close </button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
