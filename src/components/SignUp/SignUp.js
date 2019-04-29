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

    render() {
        return (
            <div>
                <form>
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