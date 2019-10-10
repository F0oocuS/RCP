import { ActionReducerMap } from '@ngrx/store';

import { homeReducer } from './home.reducer';
import { searchReducer } from './search.reducer';
import { recipeReducer } from './recipe.reducer';
import { accountReducer } from './account.reducer';
import { refrigeratorReducer } from './refrigerator.reducer';
import { shoppingListReducer } from './shopping-list.reducer';

export const reducers: ActionReducerMap<any> = {
	home: homeReducer,
	search: searchReducer,
	recipe: recipeReducer,
	account: accountReducer,
	refrigerator: refrigeratorReducer,
	shoppingList: shoppingListReducer
};
