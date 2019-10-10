import { Component, Input, OnInit } from '@angular/core';

import { RecipeInterface } from '../../../interfaces/recipe.interface';

@Component({
	selector: 'app-shopping-list-recipes',
	templateUrl: './shopping-list-recipes.component.html',
	styleUrls: ['./shopping-list-recipes.component.scss']
})
export class ShoppingListRecipesComponent implements OnInit {
	@Input() recipes: RecipeInterface[];

	constructor() {}

	ngOnInit() {}
}
