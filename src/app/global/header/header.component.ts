import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
	public isLogin: boolean;
	private isLoginSubscription: Subscription;

	constructor(private userService: UserService, private router: Router) {}

	public ngOnInit(): void {
		this.isLoginSubscription = this.userService.isLogin.subscribe(value => {
			this.isLogin = value;
		});
	}

	public ngOnDestroy(): void {
		this.isLoginSubscription.unsubscribe();
	}

	public onLogout(): void {
		UserService.logout();
		this.userService.isLogin.next(!!UserService.getToken());
		this.router.navigateByUrl('/');
	}
}
