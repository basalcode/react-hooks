import { useCounter } from "./useCounter";

const Counter = () => {
    const { item, incrementItem, decrementItem } = useCounter();

    return (
        <div>
            <h1>Hello {item}</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={incrementItem}>IncrementItem</button>
            <button onClick={decrementItem}>DecrementItem</button>
        </div>
    );
}

export default Counter;