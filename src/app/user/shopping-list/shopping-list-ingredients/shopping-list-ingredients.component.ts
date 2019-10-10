import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IngredientInterface } from '../../../interfaces/ingredient.interface';

@Component({
	selector: 'app-shopping-list-ingredients',
	templateUrl: './shopping-list-ingredients.component.html',
	styleUrls: ['./shopping-list-ingredients.component.scss']
})
export class ShoppingListIngredientsComponent implements OnInit, OnDestroy {
	@Input() ingredients: IngredientInterface[];

	constructor() {}

	public ngOnInit(): void {}

	public ngOnDestroy(): void {}
}
