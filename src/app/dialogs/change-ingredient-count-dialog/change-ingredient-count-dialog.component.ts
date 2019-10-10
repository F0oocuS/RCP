import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';

import { RefrigeratorStateInterface } from '../../store/reducers/refrigerator.reducer';
import { RefrigeratorUpdate } from '../../store/actions';

@Component({
	selector: 'app-change-ingredient-count-dialog',
	templateUrl: './change-ingredient-count-dialog.component.html',
	styleUrls: ['./change-ingredient-count-dialog.component.scss']
})
export class ChangeIngredientCountDialogComponent implements OnInit {
	public ingredientCount: FormControl;

	constructor(
		private refDialog: MatDialogRef<ChangeIngredientCountDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data,
		private store: Store<RefrigeratorStateInterface>
	) {}

	public ngOnInit(): void {
		this.initControls();
	}

	public onChangeIngredientCount(): void {
		const data = {
			ingredientId: this.data.ingredientId,
			count: this.ingredientCount.value
		};

		this.store.dispatch(new RefrigeratorUpdate(data));
	}

	private initControls(): void {
		this.ingredientCount = new FormControl(this.data.count, [
			Validators.required
		]);
	}
}
