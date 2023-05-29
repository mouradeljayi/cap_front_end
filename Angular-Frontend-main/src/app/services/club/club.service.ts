import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Club } from '../../models/Club';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private apiUrl = ' http://localhost:8080/api/v1/club';

  constructor(private http:HttpClient) { }

  getAllClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(`${this.apiUrl}`);
  }

  addUserToClub(userId: any, clubId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}/clubs/${clubId}`;
    const requestBody = {
      userId: userId,
      clubId: clubId
    };
  
    return this.http.post(url, requestBody).pipe(
      catchError(error => {
        console.log('Error adding user to club:', error);
        return throwError(error);
      })
    );
  }
  
  


}
