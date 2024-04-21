import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RemiseDeCleService {
  private readonly API_URL = "http://localhost:8000/api/remisedecle";

  constructor(private http: HttpClient) {}

  // Get all RemiseDeCle records
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/getall`);
  }

  // Get a RemiseDeCle record by ID
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/getbyid/${id}`);
  }

  // Delete a RemiseDeCle record by ID
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/delete/${id}`);
  }

  // Update a RemiseDeCle record by ID
  update(id: number, remiseDeCle: any): Observable<void> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put<void>(`${this.API_URL}/update/${id}`, remiseDeCle, {
      headers,
    });
  }

  save(remiseDeCle: FormData): Observable<void> {
    return this.http.post<void>(`${this.API_URL}/save`, remiseDeCle);
  }
  addwithfile(
    remisedecle: any,
    donneur: any,
    receveur: any,
    lot: any,
    file1: File,
    file2: File
  ): Observable<any> {
    const formData = new FormData();
    formData.append("commentaire", remisedecle.commentaire);
    formData.append("dateRemise", remisedecle.dateRemise);
    formData.append("donneur", donneur);
    formData.append("receveur", receveur);
    formData.append("lot", lot);
    formData.append("file1", file1);
    formData.append("file2", file2);

    return this.http.post(
      `${this.API_URL}/save/${donneur}/${receveur}/${lot}`,
      formData
    );
  }
  upload(file: File) {
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.http.post(`${this.API_URL}/uploadFile/`, formData);
  }
  getFileUrl(filename: string): string {
    return `${this.API_URL}/files/${filename}`;
  }

  // Method to fetch the file
  getFile(filename: string) {
    return this.http.get(this.getFileUrl(filename), { responseType: "blob" });
  }
  downloadFile(filename: string) {
    const url = `${this.API_URL}/files/${filename}`;
    return this.http.get(url, { responseType: "blob" });
  }
}
