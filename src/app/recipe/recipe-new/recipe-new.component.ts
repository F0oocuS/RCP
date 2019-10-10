import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { RecipeService } from '../../services/recipe.service';
import { AddIngredientDialogComponent } from '../../dialogs/add-ingredient-dialog/add-ingredient-dialog.component';

@Component({
	selector: 'app-recipe-new',
	templateUrl: './recipe-new.component.html',
	styleUrls: ['./recipe-new.component.scss']
})
export class RecipeNewComponent implements OnInit {
	public createRecipeForm: FormGroup;
	public ingredients = [];
	public image: File;

	constructor(private recipeService: RecipeService, private dialog: MatDialog) {}

	public ngOnInit(): void {
		this.initForm();
	}

	private initForm(): void {
		this.createRecipeForm = new FormGroup({
			name: new FormControl(null, [
				Validators.required
			]),
			description: new FormControl(null, [
				Validators.required
			]),
			process: new FormControl(null, [
				Validators.required
			]),
			ingredient: new FormControl(null)
		});
	}

	public onSubmit(): void {
		const { name, description, process } = this.createRecipeForm.value;
		const formData = new FormData();

		formData.append('image', this.image, this.image.name);
		formData.append('name', name);
		formData.append('process', process);
		formData.append('description', description);
		formData.append('ingredients', JSON.stringify(this.ingredients));

		this.recipeService.createNewRecipe(formData).subscribe(
			data => {
				console.log(data);
			},
			error => {
				console.log(error);
			}
		);
	}

	public openAddIngredientDialog(): void {
		const dialogRef = this.dialog.open(AddIngredientDialogComponent, {
			width: '600px'
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.ingredients.push({ count: result.count, id: result.ingredient.id, name: result.ingredient.name });
			}
		});
	}

	public handleFileInput(event) {
		console.log(event);
		this.image = event.target.files[0];
	}
}
