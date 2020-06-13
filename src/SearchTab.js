import React from 'react';
import { SearchBar } from './SearchBar';
import { RecipeNamesList } from './RecipeNamesList';

export class SearchTab extends React.Component {
  constructor (props) {
    super(props);
    this.state = { recipes: [] };
    this.handleSearchStarted = this.handleSearchStarted.bind(this);
  }

  handleSearchStarted (recipeName) {
    const recipes = [
      { id: 1, name: recipeName, content: 'Bardzo smaczny murzynek.' },
      { id: 2, name: 'Sernik', content: 'Coś czego mój tata się przejadł.' },
      { id: 3, name: 'Szarlotka', content: 'Najlepsze ciasto z jabłek!' }
    ];

    this.setState({ recipes });
  }

  render () {
    return (
      <fragment>
        <SearchBar onSearchStarted={this.handleSearchStarted} />
        <RecipeNamesList recipes={this.state.recipes} />
      </fragment>
    );
  }
}
