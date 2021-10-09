import { useBeforeLeave } from './useBeforeLeave';

const BeforeLeave = () => {
    const begForLife = () => console.log("Please, don't leave");

    useBeforeLeave(begForLife);

    return (
        <div>Hello</div>
    );
}

export default BeforeLeave;