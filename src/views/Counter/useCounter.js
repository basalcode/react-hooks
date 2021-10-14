import { useState } from "react";

export const useCounter = () => {
    const [number, setNumber] = useState(0);
    const onIncrease = () => setNumber(number + 1);
    const onDecrease = () => setNumber(number - 1);
    const onReset = () => setNumber(0);

    return { number, onIncrease, onDecrease, onReset };
}