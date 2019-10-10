import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { RecipeService } from '../../services/recipe.service';

@Component({
	selector: 'app-add-recipe-rating-dialog',
	templateUrl: './add-recipe-rating-dialog.component.html',
	styleUrls: ['./add-recipe-rating-dialog.component.scss']
})
export class AddRecipeRatingDialogComponent implements OnInit {
	public recipeId: number;
	public value = 1;

	constructor(
		private refDialog: MatDialogRef<AddRecipeRatingDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data,
		private recipeService: RecipeService
	) {
		this.recipeId = data.recipeId;
	}

	public ngOnInit(): void {}

	public onAddRecipeRating(): void {
		const data = {
			recipeId: this.recipeId,
			mark: this.value
		};

		this.recipeService.addRecipeRating(data).subscribe(
			item => {
				this.refDialog.close(item);
			},
			error => {
				console.log(error);
			}
		);
	}
}
