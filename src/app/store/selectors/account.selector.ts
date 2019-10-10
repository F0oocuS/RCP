import { createSelector } from '@ngrx/store';

import { AccountStateInterface } from '../reducers/account.reducer';

const getAccount = (state: AccountStateInterface) => state['account'];

export const selectAccount = createSelector(
	getAccount,
	account => account['user']
);

export const selectUserRecipes = createSelector(
	getAccount,
	account => account['userRecipes']
);

export const selectUserFavoriteRecipes = createSelector(
	getAccount,
	account => account['userFavoriteRecipes']
);
