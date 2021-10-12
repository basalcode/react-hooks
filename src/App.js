import { useState, useEffect, useRef, useCallback } from 'react';
// import Counter from './Counter/index';
// import Input from './Input/index';
// import Tabs from './Tabs/index';
// import Title from './Title/index';
// import Click from './Click/index';
// import Hover from './Hover/index';
// import Confirm from './Confirm/index';
// import PreventLeave from './PreventLeave/index';
// import BeforeLeave from './BeforeLeave/index';
// import FadeIn from './FadeIn/index';
// import Network from './Network/index';
// import Notification from './Notification';
// import Axios from './Axios';
import Scroll from './Scroll';

const useFullscreen = (callback) => {
  const element = useRef();

  const runCallback = isFull => {
    if (callback && typeof callback === "function") {
      callback(true);
    }
  }

  const triggerFullScreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }

      runCallback(true);
    }
  }

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    runCallback(false)
  }

  return { element, triggerFullScreen, exitFullScreen };
}

const App = () => {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  }
  const { element, triggerFullScreen, exitFullScreen } = useFullscreen(onFullScreen);

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Input /> */}
      {/* <Tabs /> */}
      {/* <Title /> */}
      {/* <Click /> */}
      {/* <Hover /> */}
      {/* <Confirm /> */}
      {/* <PreventLeave /> */}
      {/* <BeforeLeave /> */}
      {/* <FadeIn /> */}
      {/* <Network /> */}
      {/* <Scroll /> */}
      <div ref={element}>
        <img
          src="https://images.unsplash.com/photo-1634016793183-c3a5a5c3a48a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        />
        <button onClick={exitFullScreen}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFullScreen}>Make fullscreen</button>
      {/* <Notification /> */}
      {/* <Axios /> */}
    </div>
  );
}

export default App;
