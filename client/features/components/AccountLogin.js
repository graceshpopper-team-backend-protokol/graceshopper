import React from "react";
import { connect } from "react-redux";
import { authenticate } from '../../app/store';
import { Link } from "react-router-dom";

const AccountForm = (props) => {
    const { name, displayName, handleSubmit, error} = props;

    return (
        <div className="signInUpPage">
          <div>
            <form onSubmit={handleSubmit} name={name}>
            <div>
                <label htmlFor="username">
                <small>Username</small>
                </label>
                <input name="username" type="text" required/>
              </div>
            <div>
            <label htmlFor="password">
                <small>Password</small>
                </label>
                <input name="password" type="password" required/>
            </div>
            <div>
                <button type="submit">{displayName}</button>
                {name === 'login' ? (<div className="formSignUp"></div>
                    ) : (
                        <div className="formLogIn"></div>
                    )}
            </div>
            {error && error.response && <div>{error.response.data}</div>}
            </form>
            </div>
        </div>
    )
}

const mapOverLogin = (state) => {
    return {
        name: 'login',
        displayName: 'Login',
        error: state.auth.error,
    }
}

const mapOverSignup = (state) => {
    return {
        name: 'signup',
        displayName: 'Sign Up',
        error: state.auth.error,
    }
}

const dispatches = (dispatch) => {
    return {
        handleSubmit(event) {
            event.preventDefault();
            const form = event.target.name;
            const username = event.target.username;
            const password = event.target.password;
            dispatch(authenticate(username, password, form))
        }
    }
};

export const Login = connect(mapOverLogin, dispatches)(AccountForm)
export const Signup = connect(mapOverSignup,dispatches)(AccountForm)