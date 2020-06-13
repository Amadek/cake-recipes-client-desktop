import React from 'react';
import { withRouter } from 'react-router-dom';

class ReadRecipeTab extends React.Component {
  constructor (props) {
    super(props);
    console.log(JSON.stringify(props.match));
    this.state = { recipe: null };
  }

  componentDidMount () {
    setTimeout(() => {
      const recipe = {
        id: this.props.match.params.recipeId,
        name: 'Szarlotka',
        body: 'Najlepsze ciasto jabłkowe na świecie!'
      };
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
        <p>{this.state.recipe.body}</p>
      </main>
    );
  }
}

export const ReadRecipeTabWithRouter = withRouter(ReadRecipeTab);
