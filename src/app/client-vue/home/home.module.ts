import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  exports: [RouterModule],
})
export class HomeModule {}
