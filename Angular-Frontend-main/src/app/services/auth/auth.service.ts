import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = ' http://localhost:8080/api/v1/auth';

  constructor(private http:HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/authenticate`;
    const requestBody = { email, password };
    return this.http.post(loginUrl, requestBody);
  }

  getUserData(): Observable<User> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get<User>(`${this.apiUrl}/me`, { headers })
      .pipe(
        catchError(error => throwError(error))
      );
  }


  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null && token !== undefined;
  }
}
