import { Component, Input, OnInit } from '@angular/core';

import { RecipeService } from '../../services/recipe.service';
import { RecipeInterface } from '../../interfaces/recipe.interface';
import { ShoppingListService } from '../../services/shopping-list.service';

import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipe-item.component.html',
	styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
	@Input() recipe: RecipeInterface;

	public domainUrl = environment.domainUrl;

	constructor(
		private shoppingListService: ShoppingListService,
		private recipeService: RecipeService,
		private _snackBar: MatSnackBar
		) {}

	public ngOnInit() {}

	public onAddRecipeToShoppingList(recipeId: number) {
		this.shoppingListService.addRecipeToShoppingList(recipeId).subscribe(
			recipe => {
				const message = 'Recipe ' + recipe.name + ' was add to shopping list!';

				this._snackBar.open(message, null, {
					duration: 2000
				});
			}
		)
	}

	public onAddRemoveRecipeToFavorite(recipeId: number) {
		this.recipeService.addRemoveRecipeToFavorite(recipeId).subscribe(
			response => {
				console.log(response);
				this.recipe.isFavorite = !this.recipe.isFavorite;

				this._snackBar.open(response.message, null, {
					duration: 2000
				});
			}, error => {
				console.log(error);
			}
		)
	}
}
