import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CategorieService {
  readonly API_URL = "http://localhost:8080/api/categorie";
  constructor(private http: HttpClient) {}
  getAll() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getall`);
  }
  getcategorie(id: number) {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getbyid/` + id);
  }
  getAllByUser(id: number) {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getall/` + id);
  }
  add(categorie: any) {
    return this.http.post(`${this.API_URL}/save`, categorie);
  }
  edit(categorie: any, idcategorie: number) {
    return this.http.put(`${this.API_URL}/update/${idcategorie}`, categorie);
  }
  addUserToCategorie(idcategorie: any, iduser: number) {
    return this.http.put(
      `${this.API_URL}/adduser/${idcategorie}/${iduser}`,
      null
    );
  }
  addDevice(device: any, idcategorie: number) {
    return this.http.put(
      `${this.API_URL}/addtocategorie/${idcategorie}`,
      device
    );
  }
  deleteCategorieFromDevice(device: any) {
    return this.http.put(`${this.API_URL}/deletefromcategorie`, device);
  }
  delete(idcategorie: number) {
    return this.http.delete(`${this.API_URL}/delete/${idcategorie}`);
  }
}
