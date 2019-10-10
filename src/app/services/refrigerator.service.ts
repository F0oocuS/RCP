import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class RefrigeratorService {
	constructor(private http: HttpClient) {}

	public getAllRefrigeratorIngredients(): Observable<any> {
		return this.http.get(environment.domainUrl + 'refrigerator', {
			headers: {
				'Authorization': UserService.getToken()
			}
		});
	}

	public addIngredientToRefrigerator(ingredientId: number, count: number): Observable<any> {
		return this.http.post(environment.domainUrl + 'refrigerator', { ingredientId, count }, {
			headers: {
				'Authorization': UserService.getToken()
			}
		});
	}

	public changeIngredientCount(data): Observable<any> {
		return this.http.post(environment.domainUrl + 'refrigerator/update', data, {
			headers: {
				'Authorization': UserService.getToken()
			}
		})
	}

	public deleteIngredientFromRefrigerator(ingredientId: number): Observable<any> {
		return this.http.delete(environment.domainUrl + 'refrigerator/' + ingredientId, {
			headers: {
				'Authorization': UserService.getToken()
			}
		});
	}
}
