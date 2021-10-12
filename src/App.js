import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"

import Counter from './Counter/index';
import Input from './Input/index';
import Tab from './Tab/index';
import Title from './Title/index';
import Click from './Click/index';
import Hover from './Hover/index';
import Confirm from './Confirm/index';
import PreventLeave from './PreventLeave/index';
import BeforeLeave from './BeforeLeave/index';
import FadeIn from './FadeIn/index';
import Network from './Network/index';
import Scroll from './Scroll';
import Fullscreen from './Fullscreen';
import Notification from './Notification';
import Axios from './Axios';

const navigations = [
  { "title": "Counter" },
  { "title": "Input" },
  { "title": "Tab" },
  { "title": "Title" },
  { "title": "Click" },
  { "title": "Hover" },
  { "title": "Confirm" },
  { "title": "PreventLeave" },
  { "title": "BeforeLeave" },
  { "title": "FadeIn" },
  { "title": "Network" },
  { "title": "Scroll" },
  { "title": "Fullscreen" },
  { "title": "Notification" },
  { "title": "Axios" },
];

const App = () => {

  return (
    <div className="App">
      <div>
        <h1>React Hooks</h1>
      </div>
      <Router>
        <nav>
          <ul>
            {navigations.map(navigation => {
              const { title } = navigation;
              const path = title.toLowerCase();
              return (
                <li
                  key={title}
                >
                  <Link
                    to={`/${path}`}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>

        </nav>
        <div>
          <Route exact path={'/'}>
            <div>
              hello
            </div>
          </Route>
          <Route path={`/${"Counter".toLowerCase()}`}>
            <Counter />
          </Route>
          <Route path={`/${"Input".toLowerCase()}`}>
            <Input />
          </Route>
          <Route path={`/${"Tab".toLowerCase()}`}>
            <Tab />
          </Route>
          <Route path={`/${"Title".toLowerCase()}`}>
            <Title />
          </Route>
          <Route path={`/${"Click".toLowerCase()}`}>
            <Click />
          </Route>
          <Route path={`/${"Hover".toLowerCase()}`}>
            <Hover />
          </Route>
          <Route path={`/${"Confirm".toLowerCase()}`}>
            <Confirm />
          </Route>
          <Route path={`/${"PreventLeave".toLowerCase()}`}>
            <PreventLeave />
          </Route>
          <Route path={`/${"BeforeLeave".toLowerCase()}`}>
            <BeforeLeave />
          </Route>
          <Route path={`/${"FadeIn".toLowerCase()}`}>
            <FadeIn />
          </Route>
          <Route path={`/${"Network".toLowerCase()}`}>
            <Network />
          </Route>
          <Route path={`/${"Scroll".toLowerCase()}`}>
            <Scroll />
          </Route>
          <Route path={`/${"Fullscreen".toLowerCase()}`}>
            <Fullscreen />
          </Route>
          <Route path={`/${"Notification".toLowerCase()}`}>
            <Notification />
          </Route>
          <Route path={`/${"Axios".toLowerCase()}`}>
            <Axios />
          </Route>
        </div>
      </Router>


    </div >
  );
}

export default App;
