import { useState } from 'react';

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const [isValid, setIsValid] = useState(true);
    const onChange = event => {
        const { target: { value } } = event;

        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
        setIsValid(willUpdate);
    }

    return { value, onChange, isValid };
}