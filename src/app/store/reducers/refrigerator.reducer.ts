import { IngredientInterface } from '../../interfaces/ingredient.interface';
import * as RefrigeratorActions from '../actions/refrigerator.action';

export interface RefrigeratorStateInterface {
	ingredients: IngredientInterface[];
	loading: boolean;
	loaded: boolean;
}

export const initialState: RefrigeratorStateInterface = {
	ingredients: [],
	loading: false,
	loaded: true
};

export function refrigeratorReducer(state: RefrigeratorStateInterface = initialState, action: RefrigeratorActions.RefrigeratorActions) {
	switch(action.type) {
		case RefrigeratorActions.REFRIGERATOR_CREATE_SUCCESS: {
			return {
				...state,
				ingredients: [...state.ingredients, action.payload]
			}
		}
		case RefrigeratorActions.REFRIGERATOR_READ_SUCCESS: {
			return {
				...state,
				ingredients: [...action.payload]
			}
		}
		case RefrigeratorActions.REFRIGERATOR_UPDATE_SUCCESS: {
			const index = [...state.ingredients].findIndex(item => item.id === action.payload.ingredientId);
			[...state.ingredients][index].count = action.payload.count;

			return {
				...state,
				ingredients: [...state.ingredients]
			}
		}
		case RefrigeratorActions.REFRIGERATOR_DELETE_SUCCESS: {
			return {
				...state,
				ingredients: [
					...state.ingredients.slice(0, action.payload),
					...state.ingredients.slice(action.payload + 1)
				]
			}
		}
		default: {
			return {
				...state
			}
		}
	}
}
