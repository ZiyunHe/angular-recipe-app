import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Brisket", 
            "Quick and easy recipe for the best brisket of your life.", 
            "https://www.traegergrills.com/on/demandware.static/-/Library-Sites-TraegerSharedLibrary/default/dw55925eb8/images/recipes/2016124_Longhorn-Brisket_RE_HE.jpg",
            ["13lb whole brisket", "1/8 cup coffee grounds", "1/4 cup traeger prime rib rub"]),
        
            new Recipe(
            "Blue Berry Muffins", 
            "Moist, tasty, and every so blueberry-y!", 
            "https://images.media-allrecipes.com/userphotos/720x405/662790.jpg",
            ["1 cup fresh blueberries", "1.5 cups all-purpose flour", "0.5 cups cane sugar", "1 egg", "0.33 cup milk", "2 tsp baking soda", "0.33 cup canola oil", ".25 tsp kosher salt", "dash of cinnamon"])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}