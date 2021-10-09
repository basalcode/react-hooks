import { useState } from "react";

export const useCounter = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    return { item, incrementItem, decrementItem };
}