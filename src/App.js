import React from 'react';
import { NavBar } from './NavBar';
import { SearchTab } from './SearchTab';
import { ReadWithRouter } from './Read';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export class App extends React.Component {
  render () {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path='/recipe/:recipeId'>
            <ReadWithRouter />
          </Route>
          <Route path='/'>
            <SearchTab />
          </Route>
        </Switch>
      </Router>
    );
  }
}
