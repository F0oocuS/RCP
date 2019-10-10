import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class IngredientService {
	constructor(private http: HttpClient) {}

	public getAllIngredients(): Observable<any> {
		return this.http.get(environment.domainUrl + 'ingredient');
	}

	public findIngredientsByName(data): Observable<any> {
		return this.http.post(environment.domainUrl + 'ingredient', data);
	}
}
