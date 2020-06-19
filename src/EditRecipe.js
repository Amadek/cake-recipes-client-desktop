import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { AppContext } from './AppContext';

class EditRecipe extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      recipeName: '',
      recipeContent: '',
      saveButtonContent: 'Save',
      saveButtonDisabled: false,
      redirect: null
    };
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
    this.handleRecipeContentChange = this.handleRecipeContentChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount () {
    const recipeId = this.props.match.params.recipeId;
    this.context.cakeRecipesApiClient.getRecipe(recipeId)
      .then(recipe => {
        recipe.content = recipe.description;
        this.setState({
          recipeName: recipe.name,
          recipeContent: recipe.description
        });
      });
  }

  handleRecipeNameChange (e) {
    this.setState({ recipeName: e.target.value });
  }

  handleRecipeContentChange (e) {
    this.setState({ recipeContent: e.target.value });
  }

  handleSave () {
    const recipeId = this.props.match.params.recipeId;
    this.setState({ saveButtonContent: 'Saving...', saveButtonDisabled: true });

    Promise.resolve()
      .then(() => this.context.cakeRecipesApiClient.updateRecipe({
        _id: recipeId,
        name: this.state.recipeName,
        description: this.state.recipeContent,
        howTo: 'N/A',
        suplements: []
      }))
      .then(() => this.setState({ redirect: <Redirect to={`/recipe/${recipeId}`} /> }));
  }

  handleDelete () {
    const recipeId = this.props.match.params.recipeId;

    Promise.resolve()
      .then(() => this.context.cakeRecipesApiClient.deleteRecipe(recipeId))
      .then(() => this.setState({
        redirect: <Redirect to={{ pathname: '/', state: { alertType: 'success', alertContent: `Recipe ${this.state.recipeName} has been deleted.` } }} />
      }));
  }

  render () {
    if (this.state.redirect) return this.state.redirect;

    return (
      <main className='container mt-3'>
        <div className='modal fade' id='sureToDeleteModal' tabIndex='-1' role='dialog' aria-labelledby='sureToDeleteModalLabel' aria-hidden='true'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='sureToDeleteModalLabel'>Delete a recipe</h5>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                Are you sure to delete this recipe?
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-primary' data-dismiss='modal' onClick={this.handleDelete}>Yes</button>
                <button type='button' className='btn btn-secondary' data-dismiss='modal'>Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <h1>Edit recipe</h1>
        <form>
          <label htmlFor='recipe-name'>Recipe name:</label>
          <input type='text' className='form-control' value={this.state.recipeName} onChange={this.handleRecipeNameChange} />
          <label htmlFor='recipe-content' className='mt-3'>Recipe content:</label>
          <textarea id='recipe-content' className='form-control' rows='20' value={this.state.recipeContent} onChange={this.handleRecipeContentChange} />
          <button type='button' className='btn btn-primary mt-3' disabled={this.state.saveButtonDisabled} onClick={this.handleSave}>{this.state.saveButtonContent}</button>
          <button type='button' className='btn btn-outline-danger mt-3 ml-3' data-toggle='modal' data-target='#sureToDeleteModal'>Delete</button>
        </form>
      </main>
    );
  }
}

EditRecipe.contextType = AppContext;

export const EditRecipeWithRouter = withRouter(EditRecipe);
