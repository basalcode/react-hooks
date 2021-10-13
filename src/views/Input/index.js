import { useInput } from './useInput';

const Input = () => {
    const maxLen = value => !value.includes("@");
    const name = useInput("Mr.", maxLen);

    return (
        <div>
            <h1>Hello</h1>
            <input placeholder="Name" {...name} />
        </div>
    );
}

export default Input;