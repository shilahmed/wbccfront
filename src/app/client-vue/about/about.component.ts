import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "../../_services/token-storage.service";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AuthService } from "../../_services/auth.service";
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  public currentUser: any;
  public isLoggedIn: boolean = false;
  public loggedOut: boolean = true;
  constructor(
    public authService: AuthService,
    public tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem("currentUser")) {
      this.currentUser = this.tokenStorageService.getUser();
      this.isLoggedIn = true;
      this.loggedOut = false;
      console.log(this.currentUser);
      console.log(this.isLoggedIn);
      console.log(this.loggedOut);
    }
  }
  logout() {
    if (localStorage.getItem("currentUser")) {
      this.authService.doLogout().then(
        (res) => {
          window.location.href = "/home";
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
