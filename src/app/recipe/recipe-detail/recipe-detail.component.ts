import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { ShoppingListService } from '../../services/shopping-list.service';
import { RecipeService } from '../../services/recipe.service';
import { UserService } from '../../services/user.service';

import { RecipeInterface } from '../../interfaces/recipe.interface';
import { environment } from '../../../environments/environment';

import { AddRecipeRatingDialogComponent } from '../../dialogs/add-recipe-rating-dialog/add-recipe-rating-dialog.component';
import { AddRecipeCommentDialogComponent } from '../../dialogs/add-recipe-comment-dialog/add-recipe-comment-dialog.component';

import { RecipeStateInterface } from '../../store/reducers/recipe.reducer';
import { selectRecipe } from '../../store/selectors';
import { RecipeRead } from '../../store/actions';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
	public recipe$: Observable<RecipeInterface>;
	public recipeId: number;

	private recipeIdSubscription: Subscription;

	public domainUrl = environment.domainUrl;

	public isLogin: boolean;
	private isLoginSubscription: Subscription;

	constructor(
		private recipeService: RecipeService,
        private userService: UserService,
        private store: Store<RecipeStateInterface>,
        private activateRoute: ActivatedRoute,
        private _snackBar: MatSnackBar,
        private dialog: MatDialog,
		private shoppingListService: ShoppingListService
	) {}

	public ngOnInit(): void {
		this.recipeIdSubscription = this.activateRoute.paramMap.subscribe(result => {
			this.recipeId = parseInt(result.get('id'));

			this.recipe$ = this.store.select(selectRecipe);
			this.store.dispatch(new RecipeRead(this.recipeId));
		});

		this.isLoginSubscription = this.userService.isLogin.subscribe(value => {
			this.isLogin = value;
		});
	}

	public ngOnDestroy(): void {
		this.recipeIdSubscription.unsubscribe();
	}

	public openAddRecipeRatingDialog(): void {
		const dialog = this.dialog.open(AddRecipeRatingDialogComponent, {
			width: '600px',
			data: {
				recipeId: this.recipeId
			}
		});

		dialog.afterClosed().subscribe(result => {
			if (result) {
				this._snackBar.open('Your rating was added!', null, {
					duration: 2000
				});
			}
		});
	}

	public openAddRecipeCommentDialog(): void {
		const dialog = this.dialog.open(AddRecipeCommentDialogComponent, {
			width: '600px',
			data: {
				recipeId: this.recipeId
			}
		});

		dialog.afterClosed().subscribe(result => {
			if (result) {
				this._snackBar.open('Your comment was added!', null, {
					duration: 2000
				})
			}
		});
	}

	public onAddRecipeToShoppingList() {
		this.shoppingListService.addRecipeToShoppingList(this.recipeId).subscribe(
			() => {
				this._snackBar.open('Recipe was add to shopping list!', null, {
					duration: 2000
				});
			},
			error => {
				console.log(error);
			}
		)
	}
}
