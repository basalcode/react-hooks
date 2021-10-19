import { useFullscreen } from "./useFullscreen";

import { fullscreen, image, title, full_title, normal_title, button, fullscrren_button, exit_button } from './index.module.scss';
import { useRef } from "react/cjs/react.development";

const Fullscreen = () => {
    const titleRef = useRef();
    const onFullScreen = (isFull) => {
        const titleElement = titleRef.current;
        titleElement.innerText = `${isFull ? "풀스크린" : "일반"} 모드`;
    }
    const { element, triggerFullScreen, exitFullScreen, isFullscreen } = useFullscreen(onFullScreen);

    return (
        <div
            className={fullscreen}
            ref={element}
        >
            <img
                className={image}
                src="https://images.unsplash.com/photo-1634016793183-c3a5a5c3a48a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            />
            <h1
                ref={titleRef}
                className={`${title} ${isFullscreen ? full_title : normal_title}`}
            >현재 일반모드 입니다.</h1>
            <button
                className={`${button} ${isFullscreen ? exit_button : fullscrren_button}`}
                onClick={isFullscreen ? exitFullScreen : triggerFullScreen}
            >
                {isFullscreen ? "Exit" : "Fullscreen"}
            </button>
        </div>
    );
}

export default Fullscreen;