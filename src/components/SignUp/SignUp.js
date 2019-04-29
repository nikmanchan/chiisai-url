import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SignUp extends Component {

    render() {
        return (
            <div>
                <form>
                    <h1>Sign Up</h1>
                    <p>Email</p>
                    <input
                        type="text"
                        label="Email"
                    />
                    <p>Password</p>
                    <input
                        type="password"
                        label="Password"
                    />
                    <p>Confirm Password</p>
                    <input
                        type="password"
                        label="confirmPassword"
                    />
                    <button
                        type="submit"
                        name="submit"
                        value="Register"
                    >
                        Sign Up
                    </button>

                </form>
                <center>
                    <button
                        type="button"
                    >
                        Sign In
                </button>
                </center>
            </div >
        );
    }
}

export default withRouter(SignUp);