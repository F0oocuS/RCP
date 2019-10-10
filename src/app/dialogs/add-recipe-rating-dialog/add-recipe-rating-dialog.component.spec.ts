import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeRatingDialogComponent } from './add-recipe-rating-dialog.component';

describe('AddRecipeRatingDialogComponent', () => {
	let component: AddRecipeRatingDialogComponent;
	let fixture: ComponentFixture<AddRecipeRatingDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AddRecipeRatingDialogComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddRecipeRatingDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
