import { Action } from '@ngrx/store';

import { IngredientInterface } from '../../interfaces/ingredient.interface';

export const REFRIGERATOR_CREATE = '[Refrigerator] Create';
export const REFRIGERATOR_CREATE_SUCCESS = '[Refrigerator] Create success';
export const REFRIGERATOR_CREATE_ERROR = '[Refrigerator] Create error';

export const REFRIGERATOR_READ = '[Refrigerator] Read';
export const REFRIGERATOR_READ_SUCCESS = '[Refrigerator] Read success';
export const REFRIGERATOR_READ_ERROR = '[Refrigerator] Read error';

export const REFRIGERATOR_UPDATE = '[Refrigerator] Update';
export const REFRIGERATOR_UPDATE_SUCCESS = '[Refrigerator] Update success';
export const REFRIGERATOR_UPDATE_ERROR = '[Refrigerator] Update error';

export const REFRIGERATOR_DELETE = '[Refrigerator] Delete';
export const REFRIGERATOR_DELETE_SUCCESS = '[Refrigerator] Delete success';
export const REFRIGERATOR_DELETE_ERROR = '[Refrigerator] Delete error';

export class RefrigeratorCreate implements Action {
	readonly type = REFRIGERATOR_CREATE;

	constructor(public payload: IngredientInterface) {}
}

export class RefrigeratorCreateSuccess implements Action {
	readonly type = REFRIGERATOR_CREATE_SUCCESS;

	constructor(public payload: IngredientInterface) {}
}

export class RefrigeratorCreateError implements Action {
	readonly type = REFRIGERATOR_CREATE_ERROR;

	constructor(public payload: any) {}
}

export class RefrigeratorRead implements Action {
	readonly type = REFRIGERATOR_READ;
}

export class RefrigeratorReadSuccess implements Action {
	readonly type = REFRIGERATOR_READ_SUCCESS;

	constructor(public payload: IngredientInterface[]) {}
}

export class RefrigeratorReadError implements Action {
	readonly type = REFRIGERATOR_READ_ERROR;

	constructor(public payload: any) {}
}

export class RefrigeratorUpdate implements Action {
	readonly type = REFRIGERATOR_UPDATE;

	constructor(public payload: any) {}
}

export class RefrigeratorUpdateSuccess implements Action {
	readonly type = REFRIGERATOR_UPDATE_SUCCESS;

	constructor(public payload: any) {}
}

export class RefrigeratorUpdateError implements Action {
	readonly type = REFRIGERATOR_UPDATE_ERROR;

	constructor(public payload: any) {}
}

export class RefrigeratorDelete implements Action {
	readonly type = REFRIGERATOR_DELETE;

	constructor(public payload: any) {}
}

export class RefrigeratorDeleteSuccess implements Action {
	readonly type = REFRIGERATOR_DELETE_SUCCESS;

	constructor(public payload: number) {}
}

export class RefrigeratorDeleteError implements Action {
	readonly type = REFRIGERATOR_DELETE_ERROR;

	constructor(public payload: any) {}
}

export type RefrigeratorActions =
	RefrigeratorCreate | RefrigeratorCreateSuccess | RefrigeratorCreateError |
	RefrigeratorRead | RefrigeratorReadSuccess | RefrigeratorReadError |
	RefrigeratorUpdate | RefrigeratorUpdateSuccess | RefrigeratorUpdateError |
	RefrigeratorDelete | RefrigeratorDeleteSuccess | RefrigeratorDeleteError;
