import React from 'react';
import './SearchForm.css';

export class SearchForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { recipeName: 'recipe name...' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({ recipeName: e.target.value });
  }

  handleSubmit (e) {
    this.props.onSearchClick(this.state.recipeName);
    e.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.recipeName} onChange={this.handleChange} />
        <input type='submit' value='Search' />
      </form>
    );
  }
}
