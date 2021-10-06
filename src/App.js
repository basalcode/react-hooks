import { useState, useEffect } from 'react';
// import { useState } from 'react';
// import UseState from './UseState';
// import Input from './Input';
// import Tabs from './Tabs';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");

    htmlTitle.innerText = title;
  }

  useEffect(updateTitle, [title]);

  return setTitle;
}

const App = () => { 
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);

  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <Input /> */}
      {/* <Tabs /> */}
      <div>Hi</div>
    </div>
  );
}

export default App;
