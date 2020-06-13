import React from 'react';
import { RecipeName } from './RecipeName';

export class RecipeNamesList extends React.Component {
  render () {
    return this.props.recipes.map(recipe => (
      <RecipeName key={recipe.id} recipe={recipe} />
    ));
  }
}
