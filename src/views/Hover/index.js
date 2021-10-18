import { useHover } from "./useHover";

import { hover, hoverButton, hoverButtonText, textContainer } from './index.module.scss';
import { useRef } from "react";

const Hover = () => {
    const textContainerRef = useRef();
    const sayHello = () => {
        const textContainerElement = textContainerRef.current;
        const div = document.createElement('p');
        div.innerText = 'Hello World!';
        textContainerElement.appendChild(div);
    };
    const ref = useHover(sayHello);

    return (
        <div className={hover}>
            <div
                className={hoverButton}
                ref={ref}
            >
                <p className={hoverButtonText}>
                    Hover me !
                </p>
            </div>
            <div
                className={textContainer}
                ref={textContainerRef}
            ></div>
        </div>
    );
}

export default Hover;