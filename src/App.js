import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { NavBar } from './NavBar';
import { SearchTabWithRouter } from './SearchTab';
import { RecipeDetailsWithRouter } from './RecipeDetails';
import { AppContext } from './AppContext';
import { CakeRecipesApiClient } from './CakeRecipesApiClient';
import { AuthWithRouter } from './Auth';
import { EditRecipeWithRouter } from './EditRecipe';

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
            <Route path='/auth'>
              <AuthWithRouter />
            </Route>
            <PrivateRoute path='/recipe/:recipeId/edit'>
              <EditRecipeWithRouter />
            </PrivateRoute>
            <PrivateRoute path='/recipe/:recipeId'>
              <RecipeDetailsWithRouter />
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
  return <Route {...rest} render={handleRender} />;

  function handleRender ({ location }) {
    return !window.localStorage.getItem('jwt')
      ? <Redirect to={{ pathname: '/auth', state: { from: location } }} />
      : children;
  }
}
