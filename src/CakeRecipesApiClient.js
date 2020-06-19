import Axios from 'axios';

export class CakeRecipesApiClient {
  getRecipesByName (recipeName) {
    return Promise.resolve()
      .then(() => Axios.get(`http://localhost:4000/recipe/name/${recipeName}`))
      .then(res => res.data);
  }

  getRecipe (recipeId) {
    return Promise.resolve()
      .then(() => Axios.get(`http://localhost:4000/recipe/id/${recipeId}`))
      .then(res => res.data);
  }

  addRecipe (recipe) {
    return Promise.resolve()
      .then(() => Axios.post('http://localhost:4000/recipe', {
        name: recipe.name,
        description: recipe.content,
        howTo: 'N/A',
        suplements: []
      }, {
        headers: { Authorization: 'Bearer ' + window.localStorage.getItem('jwt') }
      }))
      .then(response => response.data);
  }

  updateRecipe (recipe) {
    return Promise.resolve()
      .then(() => Axios.patch('http://localhost:4000/recipe', recipe, { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('jwt') } }));
  }

  deleteRecipe (recipeId) {
    return Promise.resolve()
      .then(() => Axios.put(`http://localhost:4000/recipe/id/${recipeId}`, {}, { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('jwt') } }));
  }
}
