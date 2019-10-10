import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {
	public signInForm: FormGroup;
	public hidePassword = true;
	public formError: any;

	constructor(private userService: UserService, private router: Router) {}

	public ngOnInit() {
		this.initForm();
	}

	private initForm() {
		this.signInForm = new FormGroup({
			email: new FormControl(null, [
				Validators.required,
				Validators.email
			]),
			password: new FormControl(null, [
				Validators.required,
				Validators.minLength(4)
			])
		});
	}

	public onSubmit() {
		const { email, password } = this.signInForm.value;
		const data = { email, password };

		this.userService.signIn(data).subscribe(
			data => {
				localStorage.setItem('token', data.token);
				this.userService.isLogin.next(!!UserService.getToken());
				this.router.navigateByUrl('/');
			},
			error => {
				this.formError = error.error;
				console.log(error);
			}
		);
	}
}
