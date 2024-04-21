import { Component, OnInit, HostListener } from "@angular/core";

import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { User } from "../../model/user";
import { TokenStorageService } from "../../_services/token-storage.service";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AuthService } from "../../_services/auth.service";
import { AbonnementService } from "../../_services/abonnement.service";
import { PlanService } from "../../_services/plan.service";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public currentUser: any;
  public isLoggedIn: boolean = false;
  public loggedOut: boolean = true;
  isScrolledDown: boolean = false;
  showTag1: boolean = true;
  listplans: any;
  closeResult = "";
  constructor(
    public authService: AuthService,
    public tokenStorageService: TokenStorageService,
    private modalService: NgbModal,
    public planservice: PlanService,
    public abonnementservice: AbonnementService,
    private router: Router
  ) {
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd)
        if (this.router.url.toString() == "/home") location.reload();
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem("currentUser")) {
      this.currentUser = this.tokenStorageService.getUser();
      this.isLoggedIn = true;
      this.loggedOut = false;
      console.log(this.currentUser);
      console.log(this.isLoggedIn);
      console.log(this.loggedOut);
    }
    this.planservice.getActiveByPrice().subscribe(
      (data) => {
        this.listplans = data;
      },
      (err) => {
        console.log(err);
      }
    );

    setInterval(() => {
      this.toggleTags();
    }, 3000);
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

  toggleTags() {
    this.showTag1 = !this.showTag1;
  }
}
