import React from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from './AppContext';

class ReadRecipeTab extends React.Component {
  constructor (props) {
    super(props);
    this.state = { recipe: null };
  }

  componentDidMount () {
    setTimeout(() => {
      const recipeId = parseInt(this.props.match.params.recipeId);
      const recipe = this.context.cakeRecipesApiClient.getRecipe(recipeId);
      this.setState({ recipe });
    }, 1000);
  }

  render () {
    if (!this.state.recipe) {
      return (
        <main className='container mt-3'>
          <h1>Loading...</h1>
        </main>
      );
    }

    return (
      <main className='container mt-3'>
        <h1>{this.state.recipe.name}</h1>
        <p>{this.state.recipe.content}</p>
      </main>
    );
  }
}

ReadRecipeTab.contextType = AppContext;

export const ReadRecipeTabWithRouter = withRouter(ReadRecipeTab);
