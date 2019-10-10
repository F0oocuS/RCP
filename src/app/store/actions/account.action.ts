import { Action } from '@ngrx/store';

// export const ACCOUNT_CREATE = '[Account] Create';
// export const ACCOUNT_CREATE_SUCCESS = '[Account] Create success';
// export const ACCOUNT_CREATE_ERROR = '[Account] Create error';

export const ACCOUNT_READ_USER = '[Account] Read user';
export const ACCOUNT_READ_USER_SUCCESS = '[Account] Read user success';
export const ACCOUNT_READ_USER_ERROR = '[Account] Read user error';

export const ACCOUNT_UPDATE_USER = '[Account] Read user';
export const ACCOUNT_UPDATE_USER_SUCCESS = '[Account] Read user success';
export const ACCOUNT_UPDATE_USER_ERROR = '[Account] Read user error';

export const ACCOUNT_READ_USER_RECIPES = '[Account] Read user recipe';
export const ACCOUNT_READ_USER_RECIPES_SUCCESS = '[Account] Read user recipe success';
export const ACCOUNT_READ_USER_RECIPES_ERROR = '[Account] Read user recipe error';

export const ACCOUNT_READ_USER_FAVORITE = '[Account] Read user favorite';
export const ACCOUNT_READ_USER_FAVORITE_SUCCESS = '[Account] Read user favorite success';
export const ACCOUNT_READ_USER_FAVORITE_ERROR = '[Account] Read user favorite error';

// export const ACCOUNT_UPDATE = '[Account] Update';
// export const ACCOUNT_UPDATE_SUCCESS = '[Account] Update success';
// export const ACCOUNT_UPDATE_ERROR = '[Account] Update error';
//
// export const ACCOUNT_DELETE = '[Account] Delete';
// export const ACCOUNT_DELETE_SUCCESS = '[Account] Delete success';
// export const ACCOUNT_DELETE_ERROR = '[Account] Delete error';

export class AccountReadUser implements Action {
	readonly type = ACCOUNT_READ_USER;
}

export class AccountReadUserSuccess implements Action {
	readonly type = ACCOUNT_READ_USER_SUCCESS;

	constructor(public payload: any) {}
}

export class AccountReadUserError implements Action {
	readonly type = ACCOUNT_READ_USER_ERROR;

	constructor(public payload: any) {}
}

export class AccountUpdateUser implements Action {
	readonly type = ACCOUNT_UPDATE_USER;

	constructor(public payload: any) {}
}

export class AccountUpdateUserSuccess implements Action {
	readonly type = ACCOUNT_UPDATE_USER_SUCCESS;

	constructor(public payload: any) {}
}

export class AccountUpdateUserError implements Action {
	readonly type = ACCOUNT_UPDATE_USER_ERROR;

	constructor(public payload: any) {}
}

export class AccountReadUserRecipes implements Action {
	readonly type = ACCOUNT_READ_USER_RECIPES;

	constructor() {}
}

export class AccountReadUserRecipesSuccess implements Action {
	readonly type = ACCOUNT_READ_USER_RECIPES_SUCCESS;

	constructor(public payload: any) {}
}

export class AccountReadUserRecipesError implements Action {
	readonly type = ACCOUNT_READ_USER_RECIPES_ERROR;

	constructor(public payload: any) {}
}

export class AccountReadUserFavorite implements Action {
	readonly type = ACCOUNT_READ_USER_FAVORITE;
}

export class AccountReadUserFavoriteSuccess implements Action {
	readonly type = ACCOUNT_READ_USER_FAVORITE_SUCCESS;

	constructor(public payload: any) {}
}

export class AccountReadUserFavoriteError implements Action {
	readonly type = ACCOUNT_READ_USER_FAVORITE_ERROR;

	constructor(public payload: any) {}
}
export type AccountActions =
	AccountReadUser | AccountReadUserSuccess | AccountReadUserError |
	AccountUpdateUser | AccountUpdateUserSuccess | AccountUpdateUserError |
	AccountReadUserRecipes | AccountReadUserRecipesSuccess | AccountReadUserRecipesError |
	AccountReadUserFavorite | AccountReadUserFavoriteSuccess | AccountReadUserFavoriteError;
