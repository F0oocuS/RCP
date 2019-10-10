import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
	public hidePassword = true;
	public signUpForm: FormGroup;

	constructor(private userService: UserService, private router: Router) {}

	public ngOnInit(): void {
		this.initForm();
	}

	private initForm(): void {
		this.signUpForm = new FormGroup({
			email: new FormControl(null, [
				Validators.required,
				Validators.email
			]),
			userName: new FormControl(null, [
				Validators.required,
				Validators.minLength(4)
			]),
			password: new FormControl(null, [
				Validators.required,
				Validators.minLength(4)
			])
		})
	}

	public onSubmit() {
		const { email, userName, password } = this.signUpForm.value;
		const data = { email, userName, password };

		this.userService.signUp(data).subscribe(
			data => {
				console.log(data);
				if (data.token) {
					localStorage.setItem('token', data.token);
					this.userService.isLogin.next(!!UserService.getToken());
				}

				this.signUpForm.reset();
				this.router.navigateByUrl('/');
			},
			error => {
				console.log(error);
			}
		);
	}
}
