import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as HomeActions from '../actions/home.action';
import { RecipeService } from '../../services/recipe.service';

@Injectable()
export class HomeEffect {
	constructor(private actions$: Actions, private recipeService: RecipeService) {}

	@Effect()
	public readRecipe = this.actions$.pipe(
		ofType(HomeActions.HOME_READ),
		switchMap(() => this.recipeService.getTopRatedRecipes().pipe(
			map(recipes => new HomeActions.HomeReadSuccess(recipes)),
			catchError(error => of(new HomeActions.HomeReadError(error)))
		))
	);

}
