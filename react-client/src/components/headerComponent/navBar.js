import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

class NavBar extends Component {
  render() {
    return (
      <header>

        <ul id="headerButtons">
          <li className="navButton"><Link to="/login">
            <Button variant="raised" color="primary">
              Login
            </Button>
          </Link></li>
        <li className="navButton"><Link to="/login">
            <Button variant="raised" color="secundary">
              Register
            </Button>
          </Link></li>

        </ul>
  <li className="m"><Link to="/">
          <tit>BitTech Autobank</tit>
          </Link></li>
      </header>
    )
  }
}

export default NavBar;
