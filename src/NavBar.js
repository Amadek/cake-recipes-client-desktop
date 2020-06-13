import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {
  render () {
    return (
      <nav class='navbar'>
        <ul>
          <li>
            <Link to='/'>Search</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
