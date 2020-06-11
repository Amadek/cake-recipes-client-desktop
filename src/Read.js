import React from 'react';

export class Read extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.recipe.name}</h1>
        <p>{this.props.recipe.content}</p>
      </div>
    );
  }
}
