import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

export default function DeleteConfirmation({ onConfirm, onCancel, onChange }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onChange) {
        onConfirm();
        console.log("Deleted");
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onChange]);
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar onChange={onChange} />
    </div>
  );
}
