import { Component, OnInit, HostListener } from "@angular/core";
import { TokenStorageService } from "../../_services/token-storage.service";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AuthService } from "../../_services/auth.service";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  public currentUser: any;
  public isLoggedIn: boolean = false;
  public loggedOut: boolean = true;
  isScrolledDown: boolean = false;
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

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.isScrolledDown = true;
    } else {
      this.isScrolledDown = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
