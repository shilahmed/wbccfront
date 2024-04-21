import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlanService {
  readonly API_URL = "http://localhost:8080/api/plan";
  constructor(private http: HttpClient) {}
  getAll() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getall`);
  }
  getAllByDate() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getalldate`);
  }
  getAllByTitle(title: String) {
    return this.http.get(`${this.API_URL}/getall/` + title);
  }
  getActive() {
    return this.http.get(`${this.API_URL}/getactive`);
  }
  getActiveByPrice() {
    return this.http.get(`${this.API_URL}/getactivebyprice`);
  }
  add(plan: any) {
    return this.http.post(`${this.API_URL}/save`, plan);
  }
  edit(plan: any, idplan: number) {
    return this.http.put(`${this.API_URL}/update/${idplan}`, plan);
  }
  active(idplan: number) {
    return this.http.put(`${this.API_URL}/active/${idplan}`, null);
  }
  incative(idplan: number) {
    return this.http.put(`${this.API_URL}/desactive/${idplan}`, null);
  }
  delete(idplan: number) {
    return this.http.delete(`${this.API_URL}/delete/${idplan}`);
  }
  getbyid(idplan: number) {
    return this.http.get(`${this.API_URL}/getbyid/${idplan}`);
  }
}
