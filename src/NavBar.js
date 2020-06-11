import React from 'react';
import './NavBar.css';

export class NavBar extends React.Component {
  render () {
    return (
      <div className='nav-bar'>
        <button>Search</button><br />
        <button hidden={!this.props.isReadButtonVisible}>Read</button>
      </div>
    );
  }
}
