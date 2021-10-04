import { useState } from 'react';
import { useInput } from './useInput';
import UseState from './UseState';

const App = () => {
  const maxLen = value => !value.includes("@");
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      {/* <UseState /> */}

      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} />
    </div>
  );
}

export default App;
