import React from 'react';
import { withRouter } from 'react-router-dom';

class Read extends React.Component {
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
        content: 'Najlepsze ciasto jabłkowe na świecie!'
      };
      this.setState({ recipe });
    }, 1000);
  }

  render () {
    return !this.state.recipe
      ? 'Loading...'
      : <code>{JSON.stringify(this.state.recipe)}</code>;
  }
}

export const ReadWithRouter = withRouter(Read);
