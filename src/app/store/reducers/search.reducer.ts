import * as SearchActions from '../actions/search.action';

import { RecipeInterface } from '../../interfaces/recipe.interface';

export interface SearchStateInterface {
	recipes: RecipeInterface[];
	loading: boolean;
	loaded: boolean;
}

export const initialState: SearchStateInterface = {
	recipes: [],
	loading: false,
	loaded: true
};

export function searchReducer(
	state: SearchStateInterface = initialState,
	action: SearchActions.SearchActions
) {
	switch(action.type) {
		case SearchActions.SEARCH_CREATE_SUCCESS: {
			return {
				...state,
				recipes: [...state.recipes, ...action.payload]
			}
		}
		case SearchActions.SEARCH_READ_SUCCESS: {
			return {
				...state,
				recipes: [...action.payload]
			}
		}
		case SearchActions.SEARCH_UPDATE_SUCCESS: {
			return {
				...state,
				recipes: [...action.payload]
			}
		}
		default: {
			return {
				...state
			}
		}
	}
}
