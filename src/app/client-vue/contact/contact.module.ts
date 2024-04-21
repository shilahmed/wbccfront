import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactComponent } from "./contact.component";

import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  exports: [RouterModule],
})
export class ContactModule {}
