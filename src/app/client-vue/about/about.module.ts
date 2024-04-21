import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  exports: [RouterModule],
})
export class AboutModule {}
