import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { HomeRead } from '../../store/actions';

import { RecipeInterface } from '../../interfaces/recipe.interface';
import { selectHomeRecipes } from '../../store/selectors';
import { HomeStateInterface } from '../../store/reducers/home.reducer';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public recipes$: Observable<RecipeInterface[]>;

	constructor(private readonly store: Store<HomeStateInterface>) {}

	public ngOnInit(): void {
		this.recipes$ = this.store.select(selectHomeRecipes);
		this.store.dispatch(new HomeRead);
	}
}
