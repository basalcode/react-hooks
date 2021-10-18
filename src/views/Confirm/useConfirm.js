import { useState } from "react";

export const useConfirm = (message = "", onConfirm, onCancel) => {
  // const [isConfirmed, setIsConfirmed] = useState(false);

  if (onConfirm && typeof onConfirm !== "function") return;
  if (onCancel && typeof onCancel !== "function") return;

  const confirmAction = () => {
    if (window.confirm(message)) {
      // setIsConfirmed(true);
      onConfirm();
    } else {
      // setIsConfirmed(false);
      onCancel();
    }
  }

  return confirmAction;
}