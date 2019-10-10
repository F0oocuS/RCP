import { createSelector } from '@ngrx/store';

import { HomeStateInterface } from '../reducers/home.reducer';

const getHome = (state: HomeStateInterface) => state['home'];

export const selectHomeRecipes = createSelector(
	getHome,
	home => home['recipes']
);
