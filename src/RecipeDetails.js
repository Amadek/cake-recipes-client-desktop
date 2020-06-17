import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { AppContext } from './AppContext';

class RecipeDetails extends React.Component {
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
        <Link to={this.props.match.url + '/edit'} className='btn btn-primary'>Edit</Link>
      </main>
    );
  }
}

RecipeDetails.contextType = AppContext;

export const RecipeDetailsWithRouter = withRouter(RecipeDetails);
