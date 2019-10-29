import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { RecipeService } from '../../services/recipe.service';
import { UserService } from '../../services/user.service';

import { RecipeInterface } from '../../interfaces/recipe.interface';

import { SearchStateInterface } from '../../store/reducers/search.reducer';
import { SearchRead, SearchUpdate } from '../../store/actions';
import { selectSearch } from '../../store/selectors';

@Component({
	selector: 'app-all-recipe',
	templateUrl: './all-recipe.component.html',
	styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit, OnDestroy {
	public recipeSearchControl = new FormControl();

	public recipes$: Observable<RecipeInterface[]>;

	public isLogin: boolean;
	public isLoginSubscription: Subscription;

	constructor(private store: Store<SearchStateInterface>, private userService: UserService) {}

	public ngOnInit(): void {
		this.store.dispatch(new SearchRead);
		this.recipes$ = this.store.select(selectSearch);

		this.recipeSearchControl.valueChanges.subscribe(item => {
			this.store.dispatch(new SearchUpdate(item));
		});

		this.isLoginSubscription = this.userService.isLogin.subscribe(value => {
			this.isLogin = value;
		});
	}

	public ngOnDestroy(): void {
		this.isLoginSubscription.unsubscribe();
	}
}
