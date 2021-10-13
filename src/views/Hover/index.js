import { useHover } from "./useHover";

const Hover = () => {
    const sayHello = () => console.log('say hello');
    const ref = useHover(sayHello);

    return (<div ref={ref}>Hover me !</div>);
}

export default Hover;