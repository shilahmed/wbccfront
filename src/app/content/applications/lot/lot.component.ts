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
import { Lot } from "../../../model/lot";
import { LotService } from "../../../_services/lot.service";
import { ImmeubleService } from "../../../_services/immeuble.service";
@Component({
  selector: "app-lot",
  templateUrl: "./lot.component.html",
  styleUrls: ["./lot.component.css"],
})
export class LotComponent implements OnInit {
  listlot: any;
  listimmeuble: any;
  selectedImmeuble: any;
  selectedCoproprietaire: any;
  users: any;
  selectedlot: any;
  closeResult = "";
  columns: any = [];
  selected = [];
  rows: any[] = [];
  lot: Lot = new Lot();
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
    public lotService: LotService,
    public immeubleService: ImmeubleService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.selectedImmeuble = null;
    this.selectedCoproprietaire = null;
    this.lotService.getAll().subscribe(
      (data) => {
        this.listlot = data;
      },
      (err) => {
        console.log(err);
      }
    );
    this.userService.getAll().subscribe(
      (data) => {
        this.users = data;
      },
      (err) => {
        console.log(err);
      }
    );
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
    this.lotService.delete(id).subscribe(
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
    this.selectedlot = p;
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
    this.lotService.update(this.selectedlot.id, this.lot).subscribe(
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
    console.log(this.selectedImmeuble);
    console.log(this.selectedCoproprietaire);
    console.log(this.lot);
    this.lotService
      .save(this.lot, this.selectedImmeuble.id, this.selectedCoproprietaire.id)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
