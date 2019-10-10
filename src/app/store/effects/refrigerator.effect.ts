import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { RefrigeratorService } from '../../services/refrigerator.service';
import * as RefrigeratorActions from '../actions/refrigerator.action';

@Injectable()
export class RefrigeratorEffect {
	constructor(private actions$: Actions, private refrigeratorService: RefrigeratorService) {}

	@Effect()
	public readRefrigerator = this.actions$.pipe(
		ofType(RefrigeratorActions.REFRIGERATOR_READ),
		switchMap(() => this.refrigeratorService.getAllRefrigeratorIngredients().pipe(
			map(ingredients => new RefrigeratorActions.RefrigeratorReadSuccess(ingredients)),
			catchError(error => of(new RefrigeratorActions.RefrigeratorReadError(error)))
		))
	);

	@Effect()
	public addIngredientToRefrigerator = this.actions$.pipe(
		ofType(RefrigeratorActions.REFRIGERATOR_CREATE),
		switchMap(action => this.refrigeratorService.addIngredientToRefrigerator(action['payload']['id'], action['payload']['count']).pipe(
			map(ingredient => new RefrigeratorActions.RefrigeratorCreateSuccess(ingredient)),
			catchError(error => of(new RefrigeratorActions.RefrigeratorCreateError(error)))
		))
	);

	@Effect()
	public changeIngredientCount = this.actions$.pipe(
		ofType(RefrigeratorActions.REFRIGERATOR_UPDATE),
		switchMap(action => this.refrigeratorService.changeIngredientCount(action['payload']).pipe(
			map(() => new RefrigeratorActions.RefrigeratorUpdateSuccess(action['payload'])),
			catchError(error => of(new RefrigeratorActions.RefrigeratorUpdateError(error)))
		))
	);

	@Effect()
	public deleteIngredientFromRefrigerator = this.actions$.pipe(
		ofType(RefrigeratorActions.REFRIGERATOR_DELETE),
		switchMap(action => this.refrigeratorService.deleteIngredientFromRefrigerator(action['payload']['ingredientId']).pipe(
			map(() => new RefrigeratorActions.RefrigeratorDeleteSuccess(action['payload']['index'])),
			catchError(error => of(new RefrigeratorActions.RefrigeratorDeleteError(error)))
		))
	);
}
