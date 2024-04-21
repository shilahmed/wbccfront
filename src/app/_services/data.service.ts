import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  readonly API_URL = "http://localhost:8080/api/data";
  constructor(private http: HttpClient) {}
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append("file", file);
    const req = new HttpRequest("POST", `${this.API_URL}/upload`, formData, {
      reportProgress: true,
      responseType: "json",
    });
    return this.http.request(req);
  }
  getAll() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getall`);
  }
  getAllByDevice(id: number) {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getall/` + id);
  }
  getDataByDevice(id: number, str: String) {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/getdata/` + id + "/" + str);
  }
  add(data: any) {
    return this.http.post(`${this.API_URL}/save`, data);
  }
  edit(data: any, iddata: number) {
    return this.http.put(`${this.API_URL}/update/${iddata}`, data);
  }
  delete(iddata: number) {
    return this.http.delete(`${this.API_URL}/delete/${iddata}`);
  }
}
