import * as RecipeActions from '../actions/recipe.action';

import { RecipeInterface } from '../../interfaces/recipe.interface';


export interface RecipeStateInterface {
	recipe: RecipeInterface,
	loading: boolean,
	loaded: boolean
}

export const initialState: RecipeStateInterface = {
	recipe: null,
	loading: false,
	loaded: true
};

export function recipeReducer(state: RecipeStateInterface = initialState, action: RecipeActions.RecipeActions) {
	switch(action.type) {
		case RecipeActions.RECIPE_READ_SUCCESS: {
			return {
				...state,
				recipe: {...action.payload}
			}
		}
		default: {
			return {
				...state
			}
		}
	}
}
