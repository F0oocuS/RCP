import { Action } from '@ngrx/store';

export const SEARCH_CREATE = '[Search] Create';
export const SEARCH_CREATE_SUCCESS = '[Search] Create success';
export const SEARCH_CREATE_ERROR = '[Search] Create error';

export const SEARCH_READ = '[Search] Read';
export const SEARCH_READ_SUCCESS = '[Search] Read success';
export const SEARCH_READ_ERROR = '[Search] Read error';

export const SEARCH_UPDATE = '[Search] Update';
export const SEARCH_UPDATE_SUCCESS = '[Search] Update success';
export const SEARCH_UPDATE_ERROR = '[Search] Update error';

export const SEARCH_DELETE = '[Search] Delete';
export const SEARCH_DELETE_SUCCESS = '[Search] Delete success';
export const SEARCH_DELETE_ERROR = '[Search] Delete error';

export class SearchCreate implements Action {
	readonly type = SEARCH_CREATE;

	constructor(public payload: any) {}
}

export class SearchCreateSuccess implements Action {
	readonly type = SEARCH_CREATE_SUCCESS;

	constructor(public payload: any) {}
}

export class SearchCreateError implements Action {
	readonly type = SEARCH_CREATE_ERROR;

	constructor(public payload: any) {}
}

export class SearchRead implements Action {
	readonly type = SEARCH_READ;
}

export class SearchReadSuccess implements Action {
	readonly type = SEARCH_READ_SUCCESS;

	constructor(public payload: any) {}
}

export class SearchReadError implements Action {
	readonly type = SEARCH_READ_ERROR;

	constructor(public payload: any) {}
}

export class SearchUpdate implements Action {
	readonly type = SEARCH_UPDATE;

	constructor(public payload: any) {}
}

export class SearchUpdateSuccess implements Action {
	readonly type = SEARCH_UPDATE_SUCCESS;

	constructor(public payload: any) {}
}

export class SearchUpdateError implements Action {
	readonly type = SEARCH_UPDATE_ERROR;

	constructor(public payload: any) {}
}

export class SearchDelete implements Action {
	readonly type = SEARCH_DELETE;

	constructor(public payload: any) {}
}

export class SearchDeleteSuccess implements Action {
	readonly type = SEARCH_DELETE_SUCCESS;

	constructor(public payload: any) {}
}

export class SearchDeleteError implements Action {
	readonly type = SEARCH_DELETE_ERROR;

	constructor(public payload: any) {}
}

export type SearchActions =
	SearchCreate | SearchCreateSuccess | SearchCreateError |
	SearchRead | SearchReadSuccess | SearchReadError |
	SearchUpdate | SearchUpdateSuccess | SearchUpdateError |
	SearchDelete | SearchDeleteSuccess | SearchDeleteError;
