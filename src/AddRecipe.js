import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { AppContext } from './AppContext';

class AddRecipe extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      recipeName: '',
      recipeContent: '',
      saveButtonContent: 'Add',
      saveButtonDisabled: false,
      redirect: null
    };
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
    this.handleRecipeContentChange = this.handleRecipeContentChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleRecipeNameChange (e) {
    this.setState({ recipeName: e.target.value });
  }

  handleRecipeContentChange (e) {
    this.setState({ recipeContent: e.target.value });
  }

  handleAdd () {
    this.setState({
      saveButtonContent: 'Adding...',
      saveButtonDisabled: true
    });

    const recipe = {
      name: this.state.recipeName,
      content: this.state.recipeContent
    };

    Promise.resolve()
      .then(() => this.context.cakeRecipesApiClient.addRecipe(recipe))
      .then(recipeId => this.setState({ redirect: <Redirect to={`/recipe/${recipeId}`} /> }));
  }

  render () {
    if (this.state.redirect) return this.state.redirect;

    return (
      <main className='container mt-3'>
        <form>
          <label htmlFor='recipe-name'>Recipe name:</label>
          <input type='text' className='form-control' value={this.state.recipeName} onChange={this.handleRecipeNameChange} />
          <label htmlFor='recipe-content' className='mt-3'>Recipe content:</label>
          <textarea id='recipe-content' className='form-control' rows='20' value={this.state.recipeContent} onChange={this.handleRecipeContentChange} />
          <button className='btn btn-primary mt-3' disabled={this.state.saveButtonDisabled} onClick={this.handleAdd}>{this.state.saveButtonContent}</button>
        </form>
      </main>
    );
  }
}

AddRecipe.contextType = AppContext;

export const AddRecipeWithRouter = withRouter(AddRecipe);
