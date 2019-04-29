import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LoginPage extends Component {

    state = {
        username: '',
        password: '',
    };

    login = (event) => {
        event.preventDefault();

        if (this.state.username && this.state.password) {
            this.props.dispatch({
                type: 'LOGIN',
                payload: {
                    username: this.state.username,
                    password: this.state.password,
                },
            });
        } else {
            this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
        }
    } // end login

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    render() {

        return (
            <div>
                <p>
                    You need to sign in or sign up before continuing.
                </p>

                <form onSubmit={this.login}>
                    <h1> Sign In</h1>
                    <p>Email</p>
                    <input
                        required
                        type="email"
                        value={this.state.username}
                        onChange={this.handleInputChangeFor("username")}
                    />
                    <p>Password</p>
                    <input
                        required
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChangeFor("password")}
                    />
                    <button type="submit" name="submit">
                        Sign In
                    </button>
                </form>

                <center>
                    <button
                        type="button"
                        onClick={() => {
                            this.props.dispatch({ type: "SET_TO_REGISTER_MODE" });
                        }}
                    >
                        Sign Up
                    </button>
                </center>
            </div >
        );
    }
}

export default withRouter(connect(LoginPage));