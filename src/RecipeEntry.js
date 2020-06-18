import React from 'react';
import { Link } from 'react-router-dom';

export class RecipeEntry extends React.Component {
  render () {
    return (
      <div className='card my-3'>
        <div className='card-body text-truncate'>
          <Link to={`/recipe/${this.props.recipe.id}`}>{this.props.recipe.name}</Link>
          <span className='ml-3'>{this.props.recipe.content}</span>
        </div>
      </div>
    );
  }
}
