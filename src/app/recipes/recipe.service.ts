import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()

    //private recipes: Recipe[] = [
        //new Recipe('Wienerschnizel', 'Awesome schnizel!', 'https://www.thespruceeats.com/thmb/dFLHcwFFtDguBZGylUlDN8KaNaw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
        //[
        //new Ingredient('Raakaa lihaa', 1),
        //new Ingredient('Ranuja', 20)
        //]),

        //new Recipe('Burgundinpata', 
        //'Nami maiskis saatana', 
        //'https://public.keskofiles.com/f/k-ruoka/recipe/1751?w=1440&h=640&fit=crop&q=60',
        //[
            //new Ingredient('Lihasta', 1),
            //new Ingredient('Pernaa', 20)
        //])
      //]

      private recipes: Recipe[] = []

      constructor(private slService: ShoppingListService) {

      }

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes
        this.recipesChanged.next(this.recipes.slice())
      }
    
      getRecipes() {
        return this.recipes.slice()
      }

      getRecipe(index: number) {
        return this.recipes[index]
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe
        this.recipesChanged.next(this.recipes.slice())
      }
      deleteRecipe(index: number) {
        this.recipes.splice(index, 1)
        this.recipesChanged.next(this.recipes.slice())
      }
}