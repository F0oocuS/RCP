import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserService } from '../../services/user.service';

import { RecipeInterface } from '../../interfaces/recipe.interface';
import { UserInterface } from '../../interfaces/user.interface';
import { AddMoreUserInfoDialogComponent } from '../../dialogs/add-more-user-info-dialog/add-more-user-info-dialog.component';

import { AccountStateInterface } from '../../store/reducers/account.reducer';
import { AccountReadUser, AccountReadUserFavorite, AccountReadUserRecipes, AccountUpdateUser } from '../../store/actions';
import { selectAccount, selectUserFavoriteRecipes, selectUserRecipes } from '../../store/selectors';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
	public user$: Observable<UserInterface>;
	public userRecipes$: Observable<RecipeInterface[]>;
	public userFavoriteRecipes$: Observable<RecipeInterface[]>;

	constructor(private store: Store<AccountStateInterface>, private dialog: MatDialog, private userService: UserService, private router: Router) {}

	public ngOnInit(): void {
		this.store.dispatch(new AccountReadUser);
		this.store.dispatch(new AccountReadUserRecipes);
		this.store.dispatch(new AccountReadUserFavorite);

		this.user$ = this.store.select(selectAccount);
		this.userRecipes$ = this.store.select(selectUserRecipes);
		this.userFavoriteRecipes$ = this.store.select(selectUserFavoriteRecipes);
	}

	public onLogout(): void {
		UserService.logout();
		this.userService.isLogin.next(!!UserService.getToken());
		this.router.navigateByUrl('/');
	}

	public openAddMoreUserInfoDialog(): void {
		const dialog = this.dialog.open(AddMoreUserInfoDialogComponent, {
			width: '600px'
		});

		dialog.afterClosed().subscribe(
			result => {
				this.store.dispatch(new AccountUpdateUser(result));
				console.log(result);
				if (result) {
					console.log(result);
				}
				// if (result) {
				// 	this.user.firstName = result.firstName;
				// 	this.user.lastName = result.lastName;
				// 	this.user.birthday = result.birthday;
				// }
			}
		);
	}
}
