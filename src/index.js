import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Lobby from "./lobby/Lobby";
import Exhibitor from './exhibitor/Exhibitor';
import Exhibitors from './exhibitors/Exhibitors';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route path="/exhibitor">
                  <Exhibitor />
              </Route>
              <Route path="/exhibitors">
                  <Exhibitors />
              </Route>
              <Route path="/">
                  <Lobby />
              </Route>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
