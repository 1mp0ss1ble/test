import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';


class Navbar extends React.Component {
  render(){
    return ( 
      <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Home</Link>
          <Link to="/Tournaments" className="navbar-brand">Tournamnets</Link>
          <Link to="/Teams" className="navbar-brand">Teams</Link>
          <Link to="/Players" className="navbar-brand">Players</Link>
        </div>
        <div className="">
          <ul className="nav navbar-nav navbar-left">
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
           </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Navbar;