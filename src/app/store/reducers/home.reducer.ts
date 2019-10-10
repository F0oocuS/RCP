import { RecipeInterface } from '../../interfaces/recipe.interface';
import * as HomeActions from '../actions/home.action';

export interface HomeStateInterface {
	recipes: RecipeInterface[];
	loading: boolean;
	loaded: boolean;
}

export const initialState: HomeStateInterface = {
	recipes: [],
	loading: false,
	loaded: true
};

export function homeReducer(
	state: HomeStateInterface = initialState,
	action: HomeActions.HomeActions
) {
	switch(action.type) {
		case HomeActions.HOME_READ_SUCCESS: {
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
