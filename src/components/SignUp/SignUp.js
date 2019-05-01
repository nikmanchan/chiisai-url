import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./SignUp.css";

class SignUp extends Component {

    state = {
        username: '',
        password: '',
        confirmPassword: '',
    };

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    registerUser = (event) => {
        event.preventDefault();

        if (this.state.username && this.state.password && this.state.password === this.state.confirmPassword) {
            this.props.dispatch({
                type: 'REGISTER',
                payload: {
                    username: this.state.username,
                    password: this.state.password,
                },
            });
        } else if (this.state.password !== this.state.confirmPassword) {
            this.props.dispatch({ type: 'REGISTRATION_PASSWORD_ERROR' });
        } else {
            this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
        }
    } // end registerUser

    render() {
        return (
            <div align="center" className="mainContainer">
                {this.props.errors.registrationMessage && (
                    <h2
                    >
                        {this.props.errors.registrationMessage}
                    </h2>
                )}
                <form onSubmit={this.registerUser} className="userForm" id="signUpForm">
                    <h1 className="userHeader">Sign Up</h1>
                    <div className="userSecondaryContainer" align="left">
                        <p className="userCaption">Email</p>
                        <input
                            className="userInput"
                            type="email"
                            label="Email"
                            value={this.state.username}
                            onChange={this.handleInputChangeFor('username')}
                            required
                        />
                        <p className="userCaption">Password <span>(6 character min.)</span></p>
                        <input
                            className="userInput"
                            type="password"
                            pattern=".{6,}"
                            required title="6 characters minimum"
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleInputChangeFor('password')}
                        />
                        <p className="userCaption">Confirm Password</p>
                        <input
                            className="userInput"
                            type="password"
                            pattern=".{6,}"
                            required title="6 characters minimum"
                            label="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.handleInputChangeFor('confirmPassword')}
                        />
                        <br></br>
                        <button
                            type="submit"
                            name="submit"
                            value="Register"
                        >
                            Sign Up
                        </button>

                        <button
                            type="button"
                            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div >
        );
    }
}

// Instead of taking everything from state, we just want the error messages.
const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps)(SignUp);