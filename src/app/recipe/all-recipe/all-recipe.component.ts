import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { RecipeInterface } from '../../interfaces/recipe.interface';

import { SearchStateInterface } from '../../store/reducers/search.reducer';
import { SearchRead, SearchUpdate } from '../../store/actions';
import { selectSearch } from '../../store/selectors';
import { RecipeService } from '../../services/recipe.service';

@Component({
	selector: 'app-all-recipe',
	templateUrl: './all-recipe.component.html',
	styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {
	public recipeSearchControl = new FormControl();

	public recipes$: Observable<RecipeInterface[]>;

	constructor(private store: Store<SearchStateInterface>, private recipeService: RecipeService) {}

	// private initSearchRecipesForm(): void {
	// 	this.searchRecipesForm = new FormGroup({
	// 		name: new FormControl(null)
	// 	})
	// }

	public ngOnInit() {
		// this.initSearchRecipesForm();

		this.store.dispatch(new SearchRead);
		this.recipes$ = this.store.select(selectSearch);

		this.recipeSearchControl.valueChanges.subscribe(item => {
			this.store.dispatch(new SearchUpdate(item));
		})
	}

	// public onSearchRecipesFormSubmit(): void {
	// 	console.log(this.searchRecipesForm.value);
	// }
}
