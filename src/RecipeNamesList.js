import React from 'react';
import { RecipeName } from './RecipeName';

export class RecipeNamesList extends React.Component {
  render () {
    const recipeNames = this.props.recipes.map(recipe => {
      return <RecipeName key={recipe.id} recipeId={recipe.id} recipeName={recipe.name} onReadClick={this.props.onReadRecipeNameClick} />;
    });
    return recipeNames;
  }
}
