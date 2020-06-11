import React from 'react';
import { SearchForm } from './SearchForm';
import { RecipeNamesList } from './RecipeNamesList';

export class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      recipes: [
        { id: 1, name: 'Murzynek', content: 'Bardzo smaczny murzynek.' },
        { id: 2, name: 'Sernik', content: 'Coś czego mój tata się przejadł.' },
        { id: 3, name: 'Szarlotka', content: 'Najlepsze ciasto z jabłek!' }
      ]
    };
    this.handleSearchClicked = this.handleSearchClicked.bind(this);
    this.handleRecipeClick = this.handleRecipeClick.bind(this);
    this.counter = 0;
  }

  handleSearchClicked (recipeName) {
    this.setState(state => {
      this.counter++;
      state.recipes.push({ id: this.counter, name: `${this.counter}. ${recipeName}` });
      return { recipes: state.recipes };
    });
  }

  handleRecipeClick (recipeId) {
    console.log(recipeId);
  }

  render () {
    return (
      <div>
        <SearchForm onSearchClick={this.handleSearchClicked} />
        <RecipeNamesList recipes={this.state.recipes} onRecipeClick={this.handleRecipeClick} onReadRecipeNameClick={this.props.onReadRecipeNameClick} />
      </div>
    );
  }
}
