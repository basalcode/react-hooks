import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation"
import View from "layouts/View";

import './reset.module.scss';
import { app } from './App.module.scss';

const App = () => {

  return (
    <div className={app}>
      <Router>
        <Header />
        <Navigation />
        <View />
      </Router>
    </div >
  );
}

export default App;
