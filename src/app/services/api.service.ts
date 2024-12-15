import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:5500/'; // Substitua pela URL real da sua API

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    return this.http.get(`${this.apiUrl}/teams`);
  }

  getTeamDetails(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/teams/${id}`);
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }
}
