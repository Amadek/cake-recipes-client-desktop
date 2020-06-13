import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = { recipeName: 'recipe name...' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.timeoutId = -1;
  }

  handleChange (e) {
    const recipeName = e.target.value;
    this.setState({ recipeName });
    // Stop timeout if one started below is already running.
    clearTimeout(this.timeoutId);

    if (!recipeName || recipeName.length < 3) return;

    this.timeoutId = setTimeout(() => {
      this.props.onSearchStarted(recipeName);
    }, 500);
  }

  handleClick () {
    this.setState({ recipeName: '' });
    clearTimeout(this.timeoutId);
  }

  render () {
    return (
      <form className='search-bar'>
        <input value={this.state.recipeName} onChange={this.handleChange} onClick={this.handleClick} />
      </form>
    );
  }
}
