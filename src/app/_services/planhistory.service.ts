import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlanHistoryService {
  readonly API_URL = "http://localhost:8080/api/planhistory";
  constructor(private http: HttpClient) {}
  getAll(id: number) {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getall/` + id);
  }
}
