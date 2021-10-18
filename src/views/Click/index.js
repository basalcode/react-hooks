import { useClick } from './useClick';

import { click, button, textContainer } from './index.module.scss';
import { useRef } from 'react';

const Click = () => {
    const ref = useRef();
    const sayHello = () => {
        const textContainerElement = ref.current;
        const div = document.createElement('p');
        div.innerText = 'Hello World!';
        textContainerElement.appendChild(div);
    };
    const title = useClick(sayHello);

    return (
        <div className={click}>
            <button
                className={button}
                ref={title}
            >
                Click
            </button>
            <div
                className={textContainer}
                ref={ref}
            ></div>
        </div>
    );
}

export default Click;