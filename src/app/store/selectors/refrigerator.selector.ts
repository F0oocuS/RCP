import { createSelector } from '@ngrx/store';

import { RefrigeratorStateInterface } from '../reducers/refrigerator.reducer';
import { IngredientInterface } from '../../interfaces/ingredient.interface';

const getRefrigerator = (state: RefrigeratorStateInterface) => state['refrigerator'];

export const selectRefrigerator = createSelector(
	getRefrigerator,
	(refrigerator: IngredientInterface[]) => refrigerator['ingredients']
);
