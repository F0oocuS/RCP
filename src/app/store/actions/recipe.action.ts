import { Action } from '@ngrx/store';

import { RecipeInterface } from '../../interfaces/recipe.interface';

export const RECIPE_READ = '[Recipe] Read';
export const RECIPE_READ_SUCCESS = '[Recipe] Read success';
export const RECIPE_READ_ERROR = '[Recipe] Read error';

export class RecipeRead implements Action {
	readonly type = RECIPE_READ;

	constructor(public payload: number) {}
}

export class RecipeReadSuccess implements Action {
	readonly type = RECIPE_READ_SUCCESS;

	constructor(public payload: RecipeInterface) {}
}

export class RecipeReadError implements Action {
	readonly type = RECIPE_READ_ERROR;

	constructor(public payload: any) {}
}

export type RecipeActions = RecipeRead | RecipeReadSuccess | RecipeReadError;
