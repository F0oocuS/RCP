import * as ShoppingListActions from '../actions/shopping-list.action';

import { RecipeInterface } from '../../interfaces/recipe.interface';
import { IngredientInterface } from '../../interfaces/ingredient.interface';

export interface ShoppingListStateInterface {
	recipes: RecipeInterface[];
	ingredients: IngredientInterface[];
	loading: boolean;
	loaded: boolean;
}

export const initialState: ShoppingListStateInterface = {
	recipes: [],
	ingredients: [],
	loading: false,
	loaded: true
};

export function shoppingListReducer(
	state: ShoppingListStateInterface = initialState,
	action: ShoppingListActions.ShoppingListActions
) {
	switch(action.type) {
		case ShoppingListActions.SHOPPING_LIST_READ_SUCCESS: {
			return {
				...state,
				recipes: [...action.payload],
				ingredients: [...state.ingredients]
			}
		}
		default: {
			return {
				...state
			}
		}
	}
}
