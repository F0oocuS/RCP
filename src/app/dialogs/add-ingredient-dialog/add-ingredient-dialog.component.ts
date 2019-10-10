import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { IngredientInterface } from '../../interfaces/ingredient.interface';
import { IngredientService } from '../../services/ingredient.service';

@Component({
	selector: 'app-add-ingredient-dialog',
	templateUrl: './add-ingredient-dialog.component.html',
	styleUrls: ['./add-ingredient-dialog.component.scss']
})
export class AddIngredientDialogComponent implements OnInit {
	public searchIngredientInput: FormControl;
	public ingredientCount: FormControl;
	public ingredients: IngredientInterface[];

	constructor(private ingredientService: IngredientService) {}

	public ngOnInit(): void {
		this.initControls();

		this.searchIngredientInput.valueChanges.subscribe(value => {
			if (value.length > 2) {
				this.ingredientService.findIngredientsByName({ name: value }).subscribe(
					ingredients => {
						this.ingredients = ingredients;
					},
					error => {
						console.log(error);
					}
				)
			}
		})
	}

	public onAddIngredient() {
		const ingredient = this.searchIngredientInput.value;
		const count = this.ingredientCount.value;

		return { ingredient, count };
	}

	public displayIngredientName(ingredient?: IngredientInterface): string {
		return ingredient ? ingredient.name : '';
	}

	private initControls(): void {
		this.searchIngredientInput = new FormControl(null, [
			Validators.required
		]);

		this.ingredientCount = new FormControl(null, [
			Validators.required
		])
	}
}
