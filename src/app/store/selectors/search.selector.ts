import { createSelector } from '@ngrx/store';

import { SearchStateInterface } from '../reducers/search.reducer';

const getSearch = (state: SearchStateInterface) => state['search'];

export const selectSearch = createSelector(
	getSearch,
	search => search['recipes']
);
