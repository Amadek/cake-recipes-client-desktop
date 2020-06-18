import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { AppContext } from './AppContext';
import showdown from 'showdown';

class RecipeDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = { recipe: null };
  }

  componentDidMount () {
    const recipeId = this.props.match.params.recipeId;
    this.context.cakeRecipesApiClient.getRecipe(recipeId)
      .then(recipe => {
        recipe.content = new showdown.Converter().makeHtml(recipe.description);
        this.setState({ recipe });
      });
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
        <article dangerouslySetInnerHTML={{ __html: this.state.recipe.content }} />
        <Link to={this.props.match.url + '/edit'} className='btn btn-primary'>Edit</Link>
      </main>
    );
  }
}

RecipeDetails.contextType = AppContext;

export const RecipeDetailsWithRouter = withRouter(RecipeDetails);
