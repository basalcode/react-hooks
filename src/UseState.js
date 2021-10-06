import { useState } from "react";

const UseState = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    return (
        <div>
            <h1>Hello {item}</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={incrementItem}>IncrementItem</button>
            <button onClick={decrementItem}>DecrementItem</button>
        </div>
    );
}

export default UseState;