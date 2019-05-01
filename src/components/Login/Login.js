import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./Login.css";

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
            <div align="center" className="mainContainer">
                {this.props.errors.loginMessage && (
                    <h2
                    >
                        {this.props.errors.loginMessage}
                    </h2>
                )}
                <p id="loginCaption">
                    You need to sign in or sign up before continuing.
                </p>

                <form onSubmit={this.login} className="userForm" id="loginForm">
                    <div className="userSecondaryContainer">
                        <h1 className="userHeader"> Sign In</h1>
                        <p className="userCaption" align="left">Email</p>
                        <input
                            className="userInput"
                            required
                            type="email"
                            value={this.state.username}
                            onChange={this.handleInputChangeFor("username")}
                        />
                        <p className="userCaption" align="left">Password</p>
                        <input
                            className="userInput"
                            type="password"
                            pattern=".{6,}"
                            required title="6 characters minimum"
                            value={this.state.password}
                            onChange={this.handleInputChangeFor("password")}
                        />
                        <button type="submit" name="submit" className="primaryUserButton">
                            Sign In
                        </button>
                        <button
                            className="secondaryUserButton"
                            type="button"
                            onClick={() => {
                                this.props.dispatch({ type: "SET_TO_REGISTER_MODE" });
                            }}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div >
        );
    }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
    errors: state.errors,
});

export default withRouter(connect(mapStateToProps)(LoginPage));