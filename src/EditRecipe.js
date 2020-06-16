import React from 'react';

export class EditRecipe extends React.Component {
  render () {
    return (
      <main className='container mt-3'>
        <form>
          <label htmlFor='recipe-name'>Recipe name:</label>
          <input type='text' className='form-control' />
          <label htmlFor='recipe-content' className='mt-3'>Recipe content:</label>
          <textarea id='recipe-content' className='form-control' />
        </form>
      </main>
    );
  }
}
