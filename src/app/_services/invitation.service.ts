import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class InvitationService {
  readonly API_URL = "http://localhost:8080/api/invitation";
  constructor(private http: HttpClient) {}
  getAll() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getall`);
  }
  getbyemail(email: string) {
    return this.http.get(`${this.API_URL}/getbyemail/` + email);
  }
  add(invitation: any) {
    return this.http.post(`${this.API_URL}/save`, invitation);
  }
  edit(invitation: any, idinvitation: number) {
    return this.http.put(`${this.API_URL}/update/${idinvitation}`, invitation);
  }
  delete(idinvitation: number) {
    return this.http.delete(`${this.API_URL}/delete/${idinvitation}`);
  }
}
