import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	public isLogin = new BehaviorSubject<boolean>(!!UserService.getToken());

	constructor(private http: HttpClient) {}

	public signUp(data: any): Observable<any> {
		return this.http.post(environment.domainUrl + 'signup/', data);
	}

	public signIn(data): Observable<any> {
		return this.http.post(environment.domainUrl + 'signin/', data);
	}

	public getUser(): Observable<any> {
		return this.http.get(environment.domainUrl, {
			headers: {
				'Authorization': UserService.getToken()
			}
		});
	}

	public addMoreUserInfo(data) {
		return this.http.post(environment.domainUrl + 'more/', data, {
			headers: {
				'Authorization': UserService.getToken()
			}
		});
	}

	static getToken(): string {
		return localStorage.getItem('token') || '';
	}

	static logout(): void {
		localStorage.removeItem('token');
	}

}
