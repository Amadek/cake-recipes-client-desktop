import React from 'react';
import { RecipeEntry } from './RecipeEntry';

export class RecipeEntries extends React.Component {
  render () {
    return this.props.recipes.map(recipe => (
      <RecipeEntry key={recipe.id} recipe={recipe} />
    ));
  }
}
