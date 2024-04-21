import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  readonly API_URL = "http://localhost:8080/api/message";
  constructor(private http: HttpClient) {}
  getAll() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getall`);
  }
  add(message: any, id: number) {
    return this.http.post(`${this.API_URL}/save/` + id, message);
  }
}
