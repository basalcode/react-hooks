import { useState, useEffect } from 'react';
// import { useState } from 'react';
// import UseState from './UseState';
// import Input from './Input';
// import Tabs from './Tabs';

const App = () => { 
  const [number, setNumber]  = useState(0);
  const [aNumber, setAnumber]  = useState(0);

  const sayHello = () => console.log("hello");

  useEffect(sayHello(), [number]);

  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <Input /> */}
      {/* <Tabs /> */}
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}

export default App;
