import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { RecipeService } from '../../services/recipe.service';
import * as RecipeActions from '../actions/recipe.action';

@Injectable()
export class RecipeEffect {
	constructor(private actions$: Actions, private recipeService: RecipeService) {}

	@Effect()
	public readRecipe = this.actions$.pipe(
		ofType(RecipeActions.RECIPE_READ),
		switchMap(action => this.recipeService.getSingleRecipe(action['payload']).pipe(
			map(recipes => new RecipeActions.RecipeReadSuccess(recipes)),
			catchError(error => of(new RecipeActions.RecipeReadError(error)))
		))
	);
}
