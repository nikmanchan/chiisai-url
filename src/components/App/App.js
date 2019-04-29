import React, { Component } from "react";
import './App.css';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import TinyURL from "../TinyURL/TinyURL"
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";

class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={TinyURL}/>
              <Route path="/sign-up" exact component={SignUp}/>
              <Route path="/login" exact component={Login}/>
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