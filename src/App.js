import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
            <PrivateRoute path='/recipe/:recipeId'>
              <ReadRecipeTabWithRouter />
            </PrivateRoute>
            <PrivateRoute path='/'>
              <SearchTabWithRouter />
            </PrivateRoute>
          </Switch>
        </Router>
      </AppContext.Provider>
    );
  }
}

function PrivateRoute ({ children, ...rest }) {
  return (
    <Route {...rest} render={handleRender} />
  );

  function handleRender ({ location }) {
    return !window.localStorage.getItem('jwt')
      ? <Redirect to={{ pathname: '/login', state: { from: location } }} />
      : children;
  }
}
