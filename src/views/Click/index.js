import { useClick } from './useClick';

const Click = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);

    return (
        <div ref={title}>Click me !</div>
    );
}

export default Click;