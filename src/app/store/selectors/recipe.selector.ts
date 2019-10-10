import { createSelector } from '@ngrx/store';

import { RecipeStateInterface } from '../reducers/recipe.reducer';

const getRecipe = (state: RecipeStateInterface) => state['recipe'];

export const selectRecipe = createSelector(
	getRecipe,
	recipe => recipe['recipe']
);
