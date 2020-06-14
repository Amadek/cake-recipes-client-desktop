import React from 'react';
import { CakeRecipesApiClient } from './CakeRecipesApiClient';

export const AppContext = React.createContext({
  cakeRecipesApiClient: new CakeRecipesApiClient()
});
