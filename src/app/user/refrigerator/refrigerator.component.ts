import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RefrigeratorCreate, RefrigeratorDelete, RefrigeratorRead } from '../../store/actions';
import { selectRefrigerator } from '../../store/selectors';
import { RefrigeratorStateInterface } from '../../store/reducers/refrigerator.reducer';

import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { IngredientService } from '../../services/ingredient.service';
import { RefrigeratorService } from '../../services/refrigerator.service';
import { AddIngredientDialogComponent } from '../../dialogs/add-ingredient-dialog/add-ingredient-dialog.component';
import { AddRecipeCommentDialogComponent } from '../../dialogs/add-recipe-comment-dialog/add-recipe-comment-dialog.component';
import { ChangeIngredientCountDialogComponent } from '../../dialogs/change-ingredient-count-dialog/change-ingredient-count-dialog.component';

@Component({
	selector: 'app-refrigerator',
	templateUrl: './refrigerator.component.html',
	styleUrls: ['./refrigerator.component.scss']
})
export class RefrigeratorComponent implements OnInit {
	public ingredients$: Observable<IngredientInterface[]>;

	constructor(
		private ingredientService: IngredientService,
		private refrigeratorService: RefrigeratorService,
		private dialog: MatDialog,
		private store: Store<RefrigeratorStateInterface>
	) {}

	public ngOnInit(): void {
		this.ingredients$ = this.store.select(selectRefrigerator);
		this.store.dispatch(new RefrigeratorRead);
	}

	public onDeleteIngredientFromRefrigerator(index: number, ingredientId: number): void {
		console.log(index, ingredientId);

		this.store.dispatch(new RefrigeratorDelete({index, ingredientId}));
	}

	public openAddIngredientDialog(): void {
		const dialogRef = this.dialog.open(AddIngredientDialogComponent, {
			width: '600px'
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				const data = {
					id: result.ingredient.id,
					name: result.ingredient.name,
					count: result.count
				};

				this.store.dispatch(new RefrigeratorCreate(data));
			}
		});
	}

	public openChangeIngredientDialog(ingredientId: number, count: number): void {
		const dialog = this.dialog.open(ChangeIngredientCountDialogComponent, {
			width: '600px',
			data: {
				ingredientId,
				count
			}
		});

		dialog.afterClosed().subscribe(result => {
			if (result) {
				console.log(result);
			}
		});
	}
}
