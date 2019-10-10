import { createSelector } from '@ngrx/store';

import { ShoppingListStateInterface } from '../reducers/shopping-list.reducer';

const getShoppingList = (state: ShoppingListStateInterface) => state['shoppingList'];

export const selectShoppingListRecipes = createSelector(
	getShoppingList,
	shoppingList => shoppingList['recipes']
);

export const selectShoppingListIngredients = createSelector(
	getShoppingList,
	shoppingList => shoppingList['ingredients']
);
