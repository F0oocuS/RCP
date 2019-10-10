import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RecipeInterface } from '../../interfaces/recipe.interface';
import { IngredientInterface } from '../../interfaces/ingredient.interface';

import { ShoppingListStateInterface } from '../../store/reducers/shopping-list.reducer';
import { ShoppingListRead } from '../../store/actions';
import { selectShoppingListIngredients, selectShoppingListRecipes } from '../../store/selectors';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
	public recipes$: Observable<RecipeInterface[]>;
	public ingredients$: Observable<IngredientInterface[]>;

	constructor(private store: Store<ShoppingListStateInterface>) {}

	public ngOnInit(): void {
		this.store.dispatch(new ShoppingListRead);

		this.recipes$ = this.store.select(selectShoppingListRecipes);
		this.ingredients$ = this.store.select(selectShoppingListIngredients);
	}
}
