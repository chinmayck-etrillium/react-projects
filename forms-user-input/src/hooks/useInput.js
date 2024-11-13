import { useState } from "react";

export default function useInput(defaultValue, validationFn) {
  const [enteredDetail, setEnteredDetail] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const isValid = validationFn(enteredDetail);

  const handleChange = (event) => {
    setEnteredDetail(event.target.value);
    setDidEdit(false);
  };

  const handleBlur = () => {
    setDidEdit(true);
  };

  return {
    value: enteredDetail,
    handleChange,
    handleBlur,
    hasError: didEdit && !isValid,
  };
}
