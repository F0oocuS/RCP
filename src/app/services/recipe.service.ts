import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class RecipeService {
	constructor(private http: HttpClient) {}

	// TODO do something with observable returned type

	public createNewRecipe(data): Observable<any> {
		return this.http.post(environment.domainUrl + 'recipe', data, {
			headers: {
				Authorization: UserService.getToken()
			}
		});
	}

	public deleteRecipe(recipeId: number): Observable<any> {
		return this.http.delete(environment.domainUrl + 'recipe/' + recipeId);
	}

	public getAllRecipe(): Observable<any> {
		return this.http.get(environment.domainUrl + 'recipe', {
			headers: {
				Authorization: UserService.getToken()
			}
		});
	}

	public getUserRecipes(): Observable<any> {
		return this.http.get(environment.domainUrl + 'recipe/user', {
			headers: {
				Authorization: UserService.getToken()
			}
		});
	}

	public getTopRatedRecipes(): Observable<any> {
		return this.http.get(environment.domainUrl + 'recipe/top-rate', {
			headers: {
				Authorization: UserService.getToken()
			}
		});
	}

	public getUserFavoriteRecipes(): Observable<any> {
		return this.http.get(environment.domainUrl + 'recipe/favorite', {
			headers: {
				Authorization: UserService.getToken()
			}
		})
	}

	public getSingleRecipe(recipeId: number): Observable<any> {
		return this.http.get(environment.domainUrl + 'recipe/' + recipeId, {
			headers: {
				Authorization: UserService.getToken()
			}
		});
	}

	public addRemoveRecipeToFavorite(recipeId: number): Observable<any> {
		return this.http.post(environment.domainUrl + 'recipe/favorite', { recipeId } , {
			headers: {
				Authorization: UserService.getToken()
			}
		})
	}

	public addRecipeRating(data): Observable<any> {
		return this.http.post(environment.domainUrl + 'recipe/rating', data, {
			headers: {
				Authorization: UserService.getToken()
			}
		});
	}

	public addCommentToRecipe(data): Observable<any> {
		return this.http.post(environment.domainUrl + 'recipe/comment', data, {
			headers: {
				Authorization: UserService.getToken()
			}
		});
	}
	//
	// public getRecipesByParams(data): Observable<any> {
	// 	return this.http.post(environment.domainUrl + 'recipe/search', data, {
	// 		headers: {
	// 			'Authorization': UserService.getToken()
	// 		}
	// 	})
	// }

	public findRecipesByName(data): Observable<any> {
		return this.http.post(environment.domainUrl + 'recipe/search', data, {
			headers: {
				Authorization: UserService.getToken()
			}
		})
	}
}
