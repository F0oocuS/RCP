import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as SearchActions from '../actions/search.action';
import { RecipeService } from '../../services/recipe.service';

@Injectable()
export class SearchEffect {
	constructor(private actions$: Actions, private recipeService: RecipeService) {}

	@Effect()
	public readSearch = this.actions$.pipe(
		ofType(SearchActions.SEARCH_READ),
		switchMap(() => this.recipeService.getAllRecipe().pipe(
			map(recipes => new SearchActions.SearchReadSuccess(recipes)),
			catchError(error => of(new SearchActions.SearchReadError(error)))
		))
	);

	@Effect()
	public updateSearch = this.actions$.pipe(
		ofType(SearchActions.SEARCH_UPDATE),
		switchMap(action => this.recipeService.findRecipesByName({ name: action['payload'] }).pipe(
			map(recipes => new SearchActions.SearchUpdateSuccess(recipes)),
			catchError(error => of(new SearchActions.SearchUpdateError(error)))
		))
	);
}
