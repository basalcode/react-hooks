import { useInput } from './useInput';

import { input, inputTextContainer, title, inputText, inputWarning } from './index.module.scss';

const Input = () => {
    const validator = value => {
        if (value.length === 0) return true;

        const length = value.length;
        const lastWord = value[length - 1];
        const isMatched = lastWord.match(/[a-zA-Z\s]/);

        return !!isMatched;
    }
    const { value, onChange, isValid } = useInput("", validator);

    return (
        <div className={input}>
            <div className={inputTextContainer}>
                <h1 className={title}>Name: </h1>
                <input
                    className={inputText}
                    placeholder={"영어 이름을 입력해주세요"}
                    value={value}
                    onChange={onChange}
                />
            </div>
            <p className={inputWarning}>
                {isValid
                    ? value.length === 0
                        ? ""
                        : "정상적인 입력입니다!"
                    : "영문 및 띄어쓰기만 입력할 수 있습니다."
                }
            </p>
        </div>
    );
}

export default Input;