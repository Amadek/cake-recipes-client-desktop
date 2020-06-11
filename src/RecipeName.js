import React from 'react';
import './RecipeName.css';

export class RecipeName extends React.Component {
  constructor (props) {
    super(props);
    this.handleReadClick = this.handleReadClick.bind(this);
  }

  handleReadClick (e) {
    this.props.onReadClick(this.props.recipeId);
    e.preventDefault();
  }

  render () {
    return (
      <div className='recipe-name'>
        <span>{this.props.recipeName}</span>
        <button onClick={this.handleReadClick}>Read</button><br />
        <button>Edit</button>
      </div>
    );
  }
}
