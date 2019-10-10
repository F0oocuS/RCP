import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ShoppingListService } from '../../services/shopping-list.service';
import * as ShoppingListActions from '../actions/shopping-list.action';

@Injectable()
export class ShoppingListEffect {
	constructor(public actions$: Actions, public shoppingListService: ShoppingListService) {}

	@Effect()
	public readShoppingList = this.actions$.pipe(
		ofType(ShoppingListActions.SHOPPING_LIST_READ),
		switchMap(() => this.shoppingListService.getAllShoppingListRecipes().pipe(
			map(recipes => new ShoppingListActions.ShoppingListReadSuccess(recipes)),
			catchError(error => of(new ShoppingListActions.ShoppingListReadError(error)))
		))
	);
}
