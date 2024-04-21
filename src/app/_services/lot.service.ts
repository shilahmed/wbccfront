import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LotService {
  private readonly API_URL = "http://localhost:8000/api/lot";

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/getall`);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/getbyid/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/delete/${id}`);
  }

  update(id: number, lot: any): Observable<void> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put<void>(`${this.API_URL}/update/${id}`, lot, {
      headers,
    });
  }

  save(lot: any, idimm: any, idcorp: any): Observable<void> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<void>(
      `${this.API_URL}/save/${idimm}/${idcorp}`,
      lot,
      {
        headers,
      }
    );
  }
}
