import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../_services/auth.service";
import { AlertService } from "../_services/alert.service";
import { TokenStorageService } from "../_services/token-storage.service";

@Component({
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];
  loading = false;
  submitted = false;
  returnUrl: string;
  isPageLoaded = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    public authService: AuthService,
    private renderer: Renderer2,
    private tokenStorage: TokenStorageService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.returnUrl = params["returnUrl"];
    });
  }

  ngOnInit() {
    if (localStorage.getItem("currentUser")) {
      this.router.navigate(["/home"]);
    }
    this.loginForm = this.formBuilder.group({
      email: ["ahmedshil1@gmail.com", Validators.required],
      password: ["ahmedshil", Validators.required],
      rememberMe: false,
    });

    if (localStorage.getItem("currentUser")) {
      // Force logout on login if not remember me
      this.authService.doLogout();
      this.isPageLoaded = true;
    } else {
      this.isPageLoaded = true;
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  login(usr: string, pwd: string) {}

  tryLogin() {
    this.submitted = true;
    console.log(
      "---------" + this.f.email.value + "---------" + this.f.password.value
    );

    this.authService.login(this.f.email.value, this.f.password.value).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.setUserInStorage(data);
        localStorage.removeItem("currentLayoutStyle");
        let returnUrl = "/home";
        if (this.returnUrl) {
          returnUrl = this.returnUrl;
        }
        this.router.navigate([returnUrl]);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  addCheckbox(event) {
    const toggle = document.getElementById("icheckbox");
    if (event.currentTarget.className === "icheckbox_square-blue") {
      this.renderer.addClass(toggle, "checked");
    } else if (
      event.currentTarget.className === "icheckbox_square-blue checked"
    ) {
      this.renderer.removeClass(toggle, "checked");
    }
  }
  setUserInStorage(res) {
    if (res.user) {
      localStorage.setItem("currentUser", JSON.stringify(res.user));
    } else {
      localStorage.setItem("currentUser", JSON.stringify(res));
    }
  }
}
