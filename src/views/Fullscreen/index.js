import { useFullscreen } from "./useFullscreen";

const Fullscreen = () => {
    const onFullScreen = (isFull) => {
        console.log(isFull ? "We are full" : "We are small");
    }
    const { element, triggerFullScreen, exitFullScreen } = useFullscreen(onFullScreen);

    return (
        <>
            <div ref={element}>
                <img
                    src="https://images.unsplash.com/photo-1634016793183-c3a5a5c3a48a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                />
                <button onClick={exitFullScreen}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFullScreen}>Make fullscreen</button>
        </>
    );
}

export default Fullscreen;