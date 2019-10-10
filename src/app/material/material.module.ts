import { NgModule } from '@angular/core';

import {
	MatButtonModule,
	MatCardModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatBadgeModule,
	MatDividerModule,
	MatTooltipModule,
	MatAutocompleteModule, MatDialogModule, MatChipsModule, MatSliderModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule,
} from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		MatButtonModule,
		MatToolbarModule,
		MatInputModule,
		MatCardModule,
		MatIconModule,
		MatGridListModule,
		MatTabsModule,
		MatTableModule,
		MatListModule,
		MatBadgeModule,
		MatDividerModule,
		MatTooltipModule,
		MatAutocompleteModule,
		MatDialogModule,
		MatChipsModule,
		MatSliderModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatSnackBarModule
	],
	exports: [
		MatButtonModule,
		MatToolbarModule,
		MatInputModule,
		MatCardModule,
		MatIconModule,
		MatGridListModule,
		MatTabsModule,
		MatTableModule,
		MatListModule,
		MatBadgeModule,
		MatDividerModule,
		MatTooltipModule,
		MatAutocompleteModule,
		MatDialogModule,
		MatChipsModule,
		MatSliderModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatSnackBarModule
	]
})

export class MaterialModule {}
