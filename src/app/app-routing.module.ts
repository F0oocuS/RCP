import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { AccountComponent } from './user/account/account.component';
import { RefrigeratorComponent } from './user/refrigerator/refrigerator.component';
import { ShoppingListComponent } from './user/shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './global/page-not-found/page-not-found.component';
import { HomeComponent } from './global/home/home.component';
import { AllRecipeComponent } from './recipe/all-recipe/all-recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeNewComponent } from './recipe/recipe-new/recipe-new.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: 'signup', component: SignupComponent },
	{
		path: 'recipe',
		children: [
			{ path: '', component: AllRecipeComponent },
			{ path: 'new', component: RecipeNewComponent },
			{ path: ':id', component: RecipeDetailComponent },
		]
	},
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: 'refrigerator', component: RefrigeratorComponent },
	{ path: 'account', component: AccountComponent },
	{ path: '404', component: PageNotFoundComponent },
	{ path: '**', redirectTo: '404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
