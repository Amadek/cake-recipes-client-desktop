import React from 'react';

export class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = { recipeName: '' };
    this.handleChange = this.handleChange.bind(this);
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

  componentWillUnmount () {
    clearTimeout(this.timeoutId);
  }

  render () {
    return (
      <form>
        <label htmlFor='search'>Search a recipe by name:</label>
        <input id='search' className='form-control' value={this.state.recipeName} onChange={this.handleChange} />
      </form>
    );
  }
}
