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
    Promise.resolve()
      .then(() => this.context.cakeRecipesApiClient.getRecipesByName(recipeName))
      .then(recipes => recipes.map(r => ({ id: r._id, name: r.name, content: r.description })))
      .then(recipes => this.setState({ recipes }));
  }

  render () {
    return (
      <main className='container mt-4'>
        {this.props.location.state && (
          <div className={`alert alert-${this.props.location.state.alertType} alert-dismissible fade show`} role='alert'>
            {this.props.location.state.alertContent}
            <button type='button' className='close' data-dismiss='alert' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
        )}
        <SearchBar onSearchStarted={this.handleSearchStarted} />
        <RecipeEntries recipes={this.state.recipes} />
      </main>
    );
  }
}

SearchTab.contextType = AppContext;
export const SearchTabWithRouter = withRouter(SearchTab);
