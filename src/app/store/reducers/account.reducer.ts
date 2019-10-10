import * as AccountActions from '../actions/account.action';

import { UserInterface } from '../../interfaces/user.interface';
import { RecipeInterface } from '../../interfaces/recipe.interface';

export interface AccountStateInterface {
	user: UserInterface;
	userRecipes: RecipeInterface[];
	userFavoriteRecipes: RecipeInterface[];
	loading: boolean;
	loaded: boolean;
}

export const initialState: AccountStateInterface = {
	user: null,
	userRecipes: [],
	userFavoriteRecipes: [],
	loading: false,
	loaded: true
};

export function accountReducer(
	state: AccountStateInterface = initialState,
	action: AccountActions.AccountActions
) {
	switch(action.type) {
		case AccountActions.ACCOUNT_READ_USER_SUCCESS: {
			return {
				...state,
				user: { ...action.payload }
			}
		}
		case AccountActions.ACCOUNT_UPDATE_USER_SUCCESS: {
			return {
				...state,
				user: { ...action.payload }
			}
		}
		case AccountActions.ACCOUNT_READ_USER_RECIPES_SUCCESS: {
			return {
				...state,
				userRecipes: [...action.payload]
			}
		}
		case AccountActions.ACCOUNT_READ_USER_FAVORITE_SUCCESS: {
			return {
				...state,
				userFavoriteRecipes: [...action.payload]
			}
		}
		default: {
			return {
				...state
			}
		}
	}
}
