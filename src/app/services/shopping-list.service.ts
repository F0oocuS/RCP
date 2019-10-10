import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class ShoppingListService {
	constructor(private http: HttpClient) {}

	public addRecipeToShoppingList(recipeId: number): Observable<any> {
		return this.http.post(environment.domainUrl + 'shopping-list', { recipeId }, {
			headers: {
				'Authorization': UserService.getToken()
			}
		});
	}

	public getAllShoppingListRecipes(): Observable<any> {
		return this.http.get(environment.domainUrl + 'shopping-list/recipes', {
			headers: {
				'Authorization': UserService.getToken()
			}
		});
	}
}
