import React, { Component } from 'react';
import { Link } from './Router';

class SignIn extends Component {
  render() {
    return (
      <div className="container-fluid d-flex text-center">
        <div className="row w-100 mx-auto max-width">
          <div className="title col-12 top-title align-self-start text-center">
            <Link to="collection">Online Store</Link>
          </div>
          <div className="form col-11 col-md-8 col-lg-6 align-self-center">
            <form>
              <input
                id="username"
                className="w-100 d-block mb-2 pl-3 rounded border-0"
                type="text"
                placeholder="Username"
                autoComplete="username"
                autoFocus
                required
              />
              <input
                id="password"
                className="w-100 d-block pl-3 rounded border-0"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
            </form>
            <p className="login font-bold mt-4">Log In</p>
          </div>
          <div className="subtitle col-12 align-self-center">
            <Link to="registration">
              <p className="text-muted">Create an account</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
