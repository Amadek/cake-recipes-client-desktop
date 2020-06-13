import React from 'react';
import './RecipeName.css';
import { Link } from 'react-router-dom';

export class RecipeName extends React.Component {
  render () {
    return (
      <div className='recipe-name'>
        <Link to={`/recipe/${this.props.recipe.id}`}>{this.props.recipe.name}</Link>
      </div>
    );
  }
}
