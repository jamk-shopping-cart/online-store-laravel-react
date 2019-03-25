import React, { Component } from 'react';
import { Link } from './Router';

class Registration extends Component {
  render() {
    return (
      <div className="container-fluid d-flex">
        <div className="row w-100 mx-auto max-width">
          <div className="title col-12 top-title align-self-start text-center">
            <Link to="collection">ShoeFlex</Link>
          </div>
          <div className="form col-11 col-md-8 col-lg-6 align-self-center mx-auto">
            <form>
              <input
                id="email"
                className="w-100 d-block mb-2 pl-3 rounded border-0"
                type="email"
                placeholder="Email"
                autoComplete="username"
                autoFocus
                required
              />
              <input
                id="password"
                className="w-100 d-block mb-2 pl-3 rounded border-0"
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                required
              />
              <input
                id="confirm_password"
                className="w-100 d-block mb-2 pl-3 rounded border-0"
                type="password"
                placeholder="Confirm password"
                autoComplete="new-password"
                required
              />
              <input
                id="name"
                className="w-100 d-block mt-4 mb-2 pl-3 rounded border-0"
                type="text"
                placeholder="First Name"
                required
              />
              <input
                id="surname"
                className="w-100 d-block mb-2 pl-3 rounded border-0"
                type="text"
                placeholder="Last Name"
                required
              />
              <input
                id="phone"
                className="w-100 d-block mb-2 pl-3 rounded border-0"
                type="tel"
                placeholder="Phone"
                required
              />
              <input
                id="address"
                className="w-100 d-block mb-2 pl-3 rounded border-0"
                type="text"
                placeholder="Address"
                required
              />
              <input
                id="post"
                className="w-100 d-block mb-4 pl-3 rounded border-0"
                type="text"
                placeholder="Post"
                required
              />
              <label className="justify-content-md-start d-block text-center">
                <input id="confirm" type="checkbox" className="col" required />
                <span className="col">I accept the privacy policy</span>
              </label>
            </form>
          </div>
          <div className="subtitle col-12 align-self-center text-center">
            <Link to="signin">
              <p>Create an account</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
