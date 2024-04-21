import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import {
  PerfectScrollbarComponent,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarDirective,
} from "ngx-perfect-scrollbar";
import { TokenStorageService } from "../../../_services/token-storage.service";
import { UserService } from "../../../_services/user.service";
import { User } from "../../../model/user";
import { ImmeubleService } from "../../../_services/immeuble.service";
import { Immeuble } from "../../../model/immeuble";

@Component({
  selector: "app-immeuble",
  templateUrl: "./immeuble.component.html",
  styleUrls: ["./immeuble.component.css"],
})
export class ImmeubleComponent implements OnInit {
  listimmeuble: any;
  selectedimmeuble: any;
  closeResult = "";
  columns: any = [];
  selected = [];
  rows: any[] = [];
  immeuble: Immeuble = new Immeuble();
  public config: PerfectScrollbarConfigInterface = {};

  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective)
  directiveRef?: PerfectScrollbarDirective;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @ViewChild(DatatableComponent, { static: true }) table: DatatableComponent;
  constructor(
    private modalService: NgbModal,
    private renderer: Renderer2,
    public tokenStorageService: TokenStorageService,
    public immeubleService: ImmeubleService,
    public userService: UserService
  ) {}
  ngOnInit(): void {
    this.immeubleService.getAll().subscribe(
      (data) => {
        this.listimmeuble = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete(id: number) {
    this.immeubleService.delete(id).subscribe(
      (data) => {
        console.log(true);
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  openModal(content, p) {
    this.selectedimmeuble = p;
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  update() {
    this.immeubleService
      .update(this.selectedimmeuble.id, this.immeuble)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
    window.location.reload();
  }
  save() {
    console.log(this.immeuble);
    this.immeubleService.save(this.immeuble).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
