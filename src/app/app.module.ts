import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { ShoppingListComponent } from './user/shopping-list/shopping-list.component';
import { RefrigeratorComponent } from './user/refrigerator/refrigerator.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { AccountComponent } from './user/account/account.component';
import { PageNotFoundComponent } from './global/page-not-found/page-not-found.component';
import { ShoppingListRecipesComponent } from './user/shopping-list/shopping-list-recipes/shopping-list-recipes.component';
import { ShoppingListIngredientsComponent } from './user/shopping-list/shopping-list-ingredients/shopping-list-ingredients.component';
import { HomeComponent } from './global/home/home.component';
import { AllRecipeComponent } from './recipe/all-recipe/all-recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeCommentsComponent } from './recipe/recipe-comments/recipe-comments.component';
import { RecipeNewComponent } from './recipe/recipe-new/recipe-new.component';
import { AddIngredientDialogComponent } from './dialogs/add-ingredient-dialog/add-ingredient-dialog.component';
import { AddRecipeRatingDialogComponent } from './dialogs/add-recipe-rating-dialog/add-recipe-rating-dialog.component';
import { AddRecipeCommentDialogComponent } from './dialogs/add-recipe-comment-dialog/add-recipe-comment-dialog.component';
import { AddMoreUserInfoDialogComponent } from './dialogs/add-more-user-info-dialog/add-more-user-info-dialog.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { effects, reducers } from './store';
import { environment } from '../environments/environment.prod';
import { ChangeIngredientCountDialogComponent } from './dialogs/change-ingredient-count-dialog/change-ingredient-count-dialog.component';

@NgModule({
	declarations: [
		AppComponent,
		SigninComponent,
		SignupComponent,
		HeaderComponent,
		FooterComponent,
		ShoppingListComponent,
		RefrigeratorComponent,
		RecipeItemComponent,
		AccountComponent,
		PageNotFoundComponent,
		ShoppingListRecipesComponent,
		ShoppingListIngredientsComponent,
		HomeComponent,
		AllRecipeComponent,
		RecipeDetailComponent,
		RecipeEditComponent,
		RecipeCommentsComponent,
		RecipeNewComponent,
		AddIngredientDialogComponent,
		AddRecipeRatingDialogComponent,
		AddRecipeCommentDialogComponent,
		AddMoreUserInfoDialogComponent,
		ChangeIngredientCountDialogComponent
	],
	entryComponents: [
		AddIngredientDialogComponent,
		AddRecipeRatingDialogComponent,
		AddRecipeCommentDialogComponent,
		AddMoreUserInfoDialogComponent,
		ChangeIngredientCountDialogComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
		EffectsModule.forRoot([ ...effects ])
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {}
