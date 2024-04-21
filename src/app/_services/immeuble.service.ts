import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ImmeubleService {
  private readonly API_URL = "http://localhost:8000/api/immeuble";

  constructor(private http: HttpClient) {}

  // Get all immeubles
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/getall`);
  }

  // Get an immeuble by ID
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/getbyid/${id}`);
  }

  // Delete an immeuble by ID
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/delete/${id}`);
  }

  // Update an immeuble by ID
  update(id: number, immeuble: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/update/${id}`, immeuble);
  }

  // Save a new immeuble
  save(immeuble: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/save`, immeuble);
  }
}
