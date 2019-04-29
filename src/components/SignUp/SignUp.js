import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
            this.props.history.push('/dashboard')
        } else if (this.state.password !== this.state.confirmPassword){
            this.props.dispatch({ type: 'REGISTRATION_PASSWORD_ERROR' });
        } else {
            this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
        }
    } // end registerUser

    render() {
        return (
            <div>
                <form onSubmit={this.registerUser}>
                    <h1>Sign Up</h1>
                    <p>Email</p>
                    <input
                        type="text"
                        label="Email"
                        value={this.state.username}
                        onChange={this.handleInputChangeFor('username')}
                    />
                    <p>Password</p>
                    <input
                        type="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleInputChangeFor('password')}
                    />
                    <p>Confirm Password</p>
                    <input
                        type="password"
                        label="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChangeFor('confirmPassword')}
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