import { useState, useEffect, useRef } from 'react';
// import { useState } from 'react';
// import UseState from './UseState';
// import Input from './Input';
// import Tabs from './Tabs';
// import Title from './Title';

const useClick = onClick =>  {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    }
  }, []);

  if (typeof onClick !== "function") return;

  return element;
}

const App = () => { 
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  
  return (
    <div className="App">
      <div ref={title}>hi</div>
      {/* <UseState /> */}
      {/* <Input /> */}
      {/* <Tabs /> */}
      {/* <Title /> */}
    </div>
  );
}

export default App;
