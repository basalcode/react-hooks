import { useCounter } from "./useCounter";

import {
    counter,
    number_text,
    counter_buttons,
    button,
    descrease_button,
    increase_button,
    initialize_button,
} from './index.module.scss';

const Counter = () => {
    const { number, onIncrease, onDecrease, onReset } = useCounter();

    return (
        <div className={counter}>
            <p className={number_text}>
                {number}
            </p>
            <div className={counter_buttons}>
                <button
                    className={`${button} ${descrease_button}`}
                    onClick={onDecrease}
                >
                    ➖
                </button>
                <button
                    className={`${button} ${initialize_button}`}
                    onClick={onReset}
                >
                    ✅
                </button>
                <button
                    className={`${button} ${increase_button}`}
                    onClick={onIncrease}
                >
                    ➕
                </button>
            </div>
        </div>
    );
}

export default Counter;