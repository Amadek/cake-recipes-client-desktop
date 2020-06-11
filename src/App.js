import React from 'react';
import { NavBar } from './NavBar';
import { Search } from './Search';
import { Read } from './Read';

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      recipe: {
        name: 'Szarlotka',
        content: 'Najlepsze ciasto jabłkowe na świecie!'
      },
      showSearch: true
    };
    this.handleReadRecipeNameClick = this.handleReadRecipeNameClick.bind(this);
  }

  handleReadRecipeNameClick (recipeId) {
    console.log(recipeId);
    this.setState({ showSearch: false });
  }

  render () {
    return (
      <div>
        <NavBar />
        {this.state.showSearch
          ? <Search onReadRecipeNameClick={this.handleReadRecipeNameClick} />
          : <Read recipe={this.state.recipe} />}
      </div>
    );
  }
}
