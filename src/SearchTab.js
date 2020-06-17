import React from 'react';
import { SearchBar } from './SearchBar';
import { RecipeEntries } from './RecipeEntries';
import { AppContext } from './AppContext';
import { withRouter } from 'react-router-dom';

class SearchTab extends React.Component {
  constructor (props) {
    super(props);
    this.state = { recipes: [] };
    this.handleSearchStarted = this.handleSearchStarted.bind(this);
  }

  handleSearchStarted (recipeName) {
    const recipes = this.context.cakeRecipesApiClient.getRecipesByName(recipeName);
    this.setState({ recipes });
  }

  render () {
    return (
      <main className='container mt-4'>
        <SearchBar onSearchStarted={this.handleSearchStarted} />
        <RecipeEntries recipes={this.state.recipes} />
      </main>
    );
  }
}

SearchTab.contextType = AppContext;
export const SearchTabWithRouter = withRouter(SearchTab);
