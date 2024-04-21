import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DeviceService {
  readonly API_URL = "http://localhost:8080/api/device";
  constructor(private http: HttpClient) {}
  getAll() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getall`);
  }
  getAllByCategorie(id: number) {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getallbycategorie/` + id);
  }
  search(str: String) {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getall/` + str);
  }
  add(device: any) {
    return this.http.post(`${this.API_URL}/save`, device);
  }
  edit(device: any, iddevice: number) {
    return this.http.put(`${this.API_URL}/update/${iddevice}`, device);
  }

  delete(iddevice: number) {
    return this.http.delete(`${this.API_URL}/delete/${iddevice}`);
  }
}
