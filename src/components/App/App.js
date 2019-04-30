import React, { Component } from "react";
import { connect } from 'react-redux';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import TinyURL from "../TinyURL/TinyURL"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/chiisai" />
              {/* For protected routes, the view could show one of several things on the same route.
                Visiting localhost:3000/home will show the UserDashboard if the user is logged in.
                If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
                Even though it seems like they are different pages, the user is always on localhost:3000/home */}
              <ProtectedRoute path="/chiisai" exact component={TinyURL} />
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);