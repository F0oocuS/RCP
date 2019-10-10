import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { UserService } from '../../services/user.service';
import { RecipeService } from '../../services/recipe.service';
import * as AccountActions from '../actions/account.action';

@Injectable()
export class AccountEffect {
	constructor(private actions$: Actions, private userService: UserService, private recipeService: RecipeService) {}

	@Effect()
	public readAccountUser = this.actions$.pipe(
		ofType(AccountActions.ACCOUNT_READ_USER),
		switchMap(() => this.userService.getUser().pipe(
			map(user => new AccountActions.AccountReadUserSuccess(user)),
			catchError(error => of(new AccountActions.AccountReadUserError(error)))
		))
	);

	@Effect()
	public readAccountUserRecipes = this.actions$.pipe(
		ofType(AccountActions.ACCOUNT_READ_USER_RECIPES),
		switchMap(() => this.recipeService.getUserRecipes().pipe(
			map(user => new AccountActions.AccountReadUserRecipesSuccess(user)),
			catchError(error => of(new AccountActions.AccountReadUserRecipesError(error)))
		))
	);

	@Effect()
	public readAccountUserFavoriteRecipes = this.actions$.pipe(
		ofType(AccountActions.ACCOUNT_READ_USER_FAVORITE),
		switchMap(() => this.recipeService.getUserFavoriteRecipes().pipe(
			map(user => new AccountActions.AccountReadUserFavoriteSuccess(user)),
			catchError(error => of(new AccountActions.AccountReadUserFavoriteError(error)))
		))
	);
}
