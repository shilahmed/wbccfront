import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AbonnementService {
  readonly API_URL = "http://localhost:8080/api/abonnement";
  constructor(private http: HttpClient) {}
  getAll() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getall`);
  }
  getAllbydate() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getbydate`);
  }
  getvalide() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/valide`);
  }
  getinvalide() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/invalide`);
  }
  getencours() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/encours`);
  }
  add(abonnement: any, id: number) {
    return this.http.post(`${this.API_URL}/save/` + id, abonnement);
  }
  edit(abonnement: any, idabonnement: number) {
    return this.http.put(`${this.API_URL}/update/${idabonnement}`, abonnement);
  }
  delete(idabonnement: number) {
    return this.http.delete(`${this.API_URL}/delete/${idabonnement}`);
  }
  getbyid(idabonnement: number) {
    return this.http.get(`${this.API_URL}/getbyid/${idabonnement}`);
  }
  validate(idabonnement: number) {
    return this.http.put(`${this.API_URL}/active/${idabonnement}`, null);
  }
  invalidate(idabonnement: number) {
    return this.http.put(`${this.API_URL}/desactive/${idabonnement}`, null);
  }
}
