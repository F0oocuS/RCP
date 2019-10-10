import { Action } from '@ngrx/store';

export const SHOPPING_LIST_CREATE = '[Shopping List] Create';
export const SHOPPING_LIST_CREATE_SUCCESS = '[Shopping List] Create success';
export const SHOPPING_LIST_CREATE_ERROR = '[Shopping List] Create error';

export const SHOPPING_LIST_READ = '[Shopping List] Read';
export const SHOPPING_LIST_READ_SUCCESS = '[Shopping List] Read success';
export const SHOPPING_LIST_READ_ERROR = '[Shopping List] Read error';

export class ShoppingListCreate implements Action {
	readonly type = SHOPPING_LIST_CREATE;

	constructor(public payload) {}
}

export class ShoppingListCreateSuccess implements Action {
	readonly type = SHOPPING_LIST_CREATE_SUCCESS;

	constructor(public payload) {}
}

export class ShoppingListCreateError implements Action {
	readonly type = SHOPPING_LIST_CREATE_ERROR;

	constructor(public payload) {}
}

export class ShoppingListRead implements Action {
	readonly type = SHOPPING_LIST_READ;
}

export class ShoppingListReadSuccess implements Action {
	readonly type = SHOPPING_LIST_READ_SUCCESS;

	constructor(public payload: any) {}
}

export class ShoppingListReadError implements Action {
	readonly type = SHOPPING_LIST_READ_ERROR;

	constructor(public payload: any) {}
}

export type ShoppingListActions =
	ShoppingListCreate | ShoppingListCreateSuccess | ShoppingListCreateError |
	ShoppingListRead | ShoppingListReadSuccess | ShoppingListReadError;
