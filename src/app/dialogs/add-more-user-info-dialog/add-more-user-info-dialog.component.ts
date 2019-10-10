import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-add-more-user-info-dialog',
	templateUrl: './add-more-user-info-dialog.component.html',
	styleUrls: ['./add-more-user-info-dialog.component.scss']
})
export class AddMoreUserInfoDialogComponent implements OnInit {
	public addMoreUserInfo: FormGroup;

	constructor(
		private refDialog: MatDialogRef<AddMoreUserInfoDialogComponent>,
		private userService: UserService
	) {}

	public ngOnInit(): void {
		this.initForm();
	}

	private initForm(): void {
		this.addMoreUserInfo = new FormGroup({
			firstName: new FormControl(null, [
				Validators.required
			]),
			lastName: new FormControl(null, [
				Validators.required
			]),
			birthday: new FormControl(null, [
				Validators.required
			])
		})
	}

	public onSubmit(): void {
		const { firstName, lastName, birthday } = this.addMoreUserInfo.value;
		const data = { firstName, lastName, birthday };

		this.userService.addMoreUserInfo(data).subscribe(
			user => {
				this.refDialog.close(user);
				console.log(user);
			},
			error => {
				console.log(error);
			}
		);

		console.log(this.addMoreUserInfo.value);
	}
}
