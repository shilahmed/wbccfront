import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
const AUTH_API = "http://localhost:8080/api/auth/";
const API_URL = "http://localhost:8080/api/test";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, private http: HttpClient) {}
  // Register
  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => {
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }
  Register(user: any) {
    return this.http.post(AUTH_API + "signup", user);
  }
  RegisterAdmin(user: any) {
    return this.http.post(AUTH_API + "signupadmin", user);
  }
  // Login
  /* doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      this.login(value.email, value.password);
    });
  }*/
  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + "signin",
      {
        email,
        password,
      },
      httpOptions
    );
  }
  // Logout
  doLogout() {
    return new Promise<void>((resolve, reject) => {
      if (firebase.auth().currentUser) {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("remember");
        this.afAuth.auth.signOut();
        resolve();
      } else {
        localStorage.removeItem("currentUser");
        resolve();
      }
    });
  }
}
