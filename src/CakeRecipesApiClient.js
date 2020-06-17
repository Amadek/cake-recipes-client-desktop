import Axios from 'axios';

export class CakeRecipesApiClient {
  constructor () {
    this.recipes = [
      { id: 1, name: 'Murzynek', content: 'Bardzo smaczne ciemne ciasto.' },
      { id: 2, name: 'Sernik', content: '***Coś czego mój tata się przejadł.***' },
      { id: 3, name: 'Szarlotka', content: 'Najlepsze ciasto z jabłek!' }
    ];
  }

  getRecipesByName (recipeName) {
    const recipes = this.recipes.filter(recipe => recipe.name.indexOf(recipeName) !== -1);
    return recipes;
  }

  getRecipe (recipeId) {
    const recipe = this.recipes.find(recipe => recipe.id === recipeId);
    return recipe;
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
}
