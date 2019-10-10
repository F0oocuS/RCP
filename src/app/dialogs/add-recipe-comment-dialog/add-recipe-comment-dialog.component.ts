import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { RecipeService } from '../../services/recipe.service';

@Component({
	selector: 'app-add-recipe-comment-dialog',
	templateUrl: './add-recipe-comment-dialog.component.html',
	styleUrls: ['./add-recipe-comment-dialog.component.scss']
})
export class AddRecipeCommentDialogComponent implements OnInit {
	public addRecipeCommentForm: FormGroup;
	constructor(
		private refDialog: MatDialogRef<AddRecipeCommentDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data,
		private recipeService: RecipeService
	) {}

	public ngOnInit(): void {
		this.initForm();
		console.log(this.addRecipeCommentForm);
	}

	private initForm(): void {
		this.addRecipeCommentForm = new FormGroup({
			comment: new FormControl(null, [
				Validators.required
			])
		})
	}

	public onSubmit(): void {
		const data = {
			comment: this.addRecipeCommentForm.value.comment,
			recipeId: this.data.recipeId
		};

		this.recipeService.addCommentToRecipe(data).subscribe(
			item => {
				this.refDialog.close(item);
			},
			error => {
				console.log(error);
			});
	}
}
