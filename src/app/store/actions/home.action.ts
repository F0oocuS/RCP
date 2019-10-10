import { Action } from '@ngrx/store';

export const HOME_CREATE = '[Home] Create';
export const HOME_CREATE_SUCCESS = '[Home] Create success';
export const HOME_CREATE_ERROR = '[Home] Create error';

export const HOME_READ = '[Home] Read';
export const HOME_READ_SUCCESS = '[Home] Read success';
export const HOME_READ_ERROR = '[Home] Read error';

export const HOME_UPDATE = '[Home] Update';
export const HOME_UPDATE_SUCCESS = '[Home] Update success';
export const HOME_UPDATE_ERROR = '[Home] Update error';

export const HOME_DELETE = '[Home] Delete';
export const HOME_DELETE_SUCCESS = '[Home] Delete success';
export const HOME_DELETE_ERROR = '[Home] Delete error';

export class HomeCreate implements Action {
	readonly type = HOME_CREATE;

	constructor(public payload: any) {}
}

export class HomeCreateSuccess implements Action {
	readonly type = HOME_CREATE_SUCCESS;

	constructor(public payload: any) {}
}

export class HomeCreateError implements Action {
	readonly type = HOME_CREATE_ERROR;

	constructor(public payload: any) {}
}

export class HomeRead implements Action {
	readonly type = HOME_READ;
}

export class HomeReadSuccess implements Action {
	readonly type = HOME_READ_SUCCESS;

	constructor(public payload: any) {}
}

export class HomeReadError implements Action {
	readonly type = HOME_READ_ERROR;

	constructor(public payload: any) {}
}

export class HomeUpdate implements Action {
	readonly type = HOME_UPDATE;

	constructor(public payload: any) {}
}

export class HomeUpdateSuccess implements Action {
	readonly type = HOME_UPDATE_SUCCESS;

	constructor(public payload: any) {}
}

export class HomeUpdateError implements Action {
	readonly type = HOME_UPDATE_ERROR;

	constructor(public payload: any) {}
}

export class HomeDelete implements Action {
	readonly type = HOME_DELETE;

	constructor(public payload: any) {}
}

export class HomeDeleteSuccess implements Action {
	readonly type = HOME_DELETE_SUCCESS;

	constructor(public payload: any) {}
}

export class HomeDeleteError implements Action {
	readonly type = HOME_DELETE_ERROR;

	constructor(public payload: any) {}
}

export type HomeActions =
	HomeCreate | HomeCreateSuccess | HomeCreateError |
	HomeRead | HomeReadSuccess | HomeReadError |
	HomeUpdate | HomeUpdateSuccess | HomeUpdateError |
	HomeDelete | HomeDeleteSuccess | HomeDeleteError;
