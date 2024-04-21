import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BreadcrumbModule } from "../../../_layout/breadcrumb/breadcrumb.module";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxDatatableModule,
    BreadcrumbModule,
    FormsModule,
    NgbModule,
    PerfectScrollbarModule,
  ],
  exports: [RouterModule],
})
export class AbonnementModule {}
