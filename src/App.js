import React from 'react';
import { NavBar } from './NavBar';
import { SearchTab } from './SearchTab';
import { ReadRecipeTabWithRouter } from './ReadRecipeTab';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export class App extends React.Component {
  render () {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path='/recipe/:recipeId'>
            <ReadRecipeTabWithRouter />
          </Route>
          <Route path='/'>
            <SearchTab />
          </Route>
        </Switch>
      </Router>
    );
  }
}
