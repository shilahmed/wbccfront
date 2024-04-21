import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ConversationService {
  readonly API_URL = "http://localhost:8080/api/conversation";
  constructor(private http: HttpClient) {}
  getConversations() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getconveruser`);
  }
  getConversationMessages(id: number) {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/messages/` + id);
  }
  get(id: number) {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/` + id);
  }
  seen(id: number) {
    return this.http.put(`${this.API_URL}/seen/${id}`, null);
  }
  /*getConversations() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getall`);
  }*/
}
