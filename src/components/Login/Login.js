import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LoginPage extends Component {

    state = {
        username: '',
        password: '',
    };

    render() {

        return (
            <div>
                <p>
                    You need to sign in or sign up before continuing.
                </p>

                <form>
                    <h1> Sign In</h1>
                    <p>Email</p>
                    <input
                        required
                        type="email"
                        value={this.state.username}

                    />
                    <p>Password</p>
                    <input
                        required
                        type="password"
                        value={this.state.password}
                    />
                    <button type="submit" name="submit">
                        Sign In
                    </button>
                </form>

                <center>
                    <button type="button">
                        Sign Up
                    </button>
                </center>
            </div >
        );
    }
}

export default withRouter(connect(LoginPage));