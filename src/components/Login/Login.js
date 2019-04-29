import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LoginPage extends Component {

    render() {

        return (
            <div>
                <p>
                    You need to sign in or sign up before continuing.
                </p>

                <form>
                    <h1> Sign In</h1>
                    <input
                        required
                        type="email"
                    />

                    <input
                        required
                        type="password"
                    />
                    <button type="submit" name="submit">
                        Sign In
                    </button>
                </form>

                <center>
                    <button type="button">
                        Don't have an account?
                    </button>
                </center>
            </div >
        );
    }
}

export default withRouter(connect(LoginPage));