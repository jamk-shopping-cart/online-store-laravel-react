import React, { Component } from 'react';
import { Link } from './Router';

class StartPage extends Component {
  render() {
    return (
      <div className="container-fluid d-flex">
        <div className="row w-100 mx-auto">
          <div className="col-12 title align-self-end text-center font-light">
            <p className="animated fadeIn delay-0.5s">ShoeFlex</p>
          </div>
          <div className="col-12 subtitle align-self-center text-center font-bold animated fadeIn delay-1s">
            <p>View Our Collection 2018</p>
            <Link to="collection">
              <i className="fas fa fa-chevron-down" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default StartPage;
