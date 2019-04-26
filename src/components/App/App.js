import React, { Component } from "react";
import './App.css';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import TinyURL from "../TinyURL/TinyURL"

class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={TinyURL}/>
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;