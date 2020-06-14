import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './NavBar';
import { SearchTabWithRouter } from './SearchTab';
import { ReadRecipeTabWithRouter } from './ReadRecipeTab';
import { AppContext } from './AppContext';
import { CakeRecipesApiClient } from './CakeRecipesApiClient';
import { LoginWithRouter } from './Login';

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.appContext = {
      cakeRecipesApiClient: new CakeRecipesApiClient()
    };
  }

  render () {
    return (
      <AppContext.Provider value={this.appContext}>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/login'>
              <LoginWithRouter />
            </Route>
            <Route path='/recipe/:recipeId'>
              <ReadRecipeTabWithRouter />
            </Route>
            <Route path='/'>
              <SearchTabWithRouter />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    );
  }
}
