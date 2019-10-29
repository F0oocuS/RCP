import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { UserService } from '../../services/user.service';

import { HomeRead } from '../../store/actions';

import { RecipeInterface } from '../../interfaces/recipe.interface';
import { selectHomeRecipes } from '../../store/selectors';
import { HomeStateInterface } from '../../store/reducers/home.reducer';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
	public recipes$: Observable<RecipeInterface[]>;
	public isLogin: boolean;

	private isLoginSubscription: Subscription;

	constructor(private readonly store: Store<HomeStateInterface>, private userService: UserService) {}

	public ngOnInit(): void {
		this.recipes$ = this.store.select(selectHomeRecipes);
		this.store.dispatch(new HomeRead);

		this.isLoginSubscription = this.userService.isLogin.subscribe(value => {
			this.isLogin = value;
		});
	}

	public ngOnDestroy(): void {
		this.isLoginSubscription.unsubscribe();
	}
}
