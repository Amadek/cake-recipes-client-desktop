import React from 'react';
import { withRouter } from 'react-router-dom';

class EditRecipe extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      recipeName: '',
      recipeContent: '',
      saveButtonContent: 'Save',
      saveButtonDisabled: false
    };
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
    this.handleRecipeContentChange = this.handleRecipeContentChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleRecipeNameChange (e) {
    this.setState({ recipeName: e.target.value });
  }

  handleRecipeContentChange (e) {
    this.setState({ recipeContent: e.target.value });
  }

  handleSave () {
    this.setState({ saveButtonContent: 'Saving...', saveButtonDisabled: true });
    window.location = this.props.match.url.replace('/edit', '');
  }

  render () {
    return (
      <main className='container mt-3'>
        <form>
          <label htmlFor='recipe-name'>Recipe name:</label>
          <input type='text' className='form-control' value={this.state.recipeName} onChange={this.handleRecipeNameChange} />
          <label htmlFor='recipe-content' className='mt-3'>Recipe content:</label>
          <textarea id='recipe-content' className='form-control' rows='20' value={this.state.recipeContent} onChange={this.handleRecipeContentChange} />
          <button type='button' className='btn btn-primary mt-3' disabled={this.state.saveButtonDisabled} onClick={this.handleSave}>{this.state.saveButtonContent}</button>
        </form>
      </main>
    );
  }
}

export const EditRecipeWithRouter = withRouter(EditRecipe);
