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
import { RemiseDeCle } from "../../../model/remiseDeCle";
import { RemiseDeCleService } from "../../../_services/remisedecle.service";
import { LotService } from "../../../_services/lot.service";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-remisedecle",
  templateUrl: "./remisedecle.component.html",
  styleUrls: ["./remisedecle.component.css"],
})
export class RemisedecleComponent implements OnInit {
  listremisedecle: any;
  listlot: any;
  donneur: any;
  receveur: any;
  lot: any;
  selectedremis: any;
  signatureFile: File | null = null;
  photoOuVideoFile: File | null = null;
  users: any;
  selectedremisedecle: any;
  closeResult = "";
  columns: any = [];
  selected = [];
  rows: any[] = [];
  remisedecle: RemiseDeCle = new RemiseDeCle();
  public config: PerfectScrollbarConfigInterface = {};
  fileToUpload?: File;
  fileToUpload2?: File;
  imageUrl: string | null = null;
  videoUrl: string | null = null;
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
    public remiseDeCleService: RemiseDeCleService,
    public userService: UserService,
    public lotService: LotService
  ) {}

  ngOnInit(): void {
    this.donneur = null;
    this.receveur = null;
    this.lot = null;
    this.remiseDeCleService.getAll().subscribe(
      (data) => {
        this.listremisedecle = data;
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
    this.lotService.getAll().subscribe(
      (data) => {
        this.listlot = data;
        console.log(this.listlot);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete(id: number) {
    this.remiseDeCleService.delete(id).subscribe(
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
    this.selectedremisedecle = p;
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
  open(content, p) {
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
  openmodal(content) {
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
    this.remiseDeCleService
      .update(this.selectedremisedecle.id, this.remisedecle)
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

  newsave() {
    console.log(this.donneur);
    console.log(this.receveur);
    console.log(this.lot);
    if (this.fileToUpload && this.fileToUpload2) {
      const file: File | null = this.fileToUpload;
      const file2: File | null = this.fileToUpload2;
      if (file) {
        this.remiseDeCleService
          .addwithfile(
            this.remisedecle,
            this.donneur,
            this.receveur,
            this.lot,
            file,
            file2
          )
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
  }
  uploadFile() {
    if (this.fileToUpload && this.fileToUpload2) {
      this.remiseDeCleService.upload(this.fileToUpload).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
      this.remiseDeCleService.upload(this.fileToUpload2).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.error("File is undefined");
    }
  }
  selectFile(event: any): void {
    this.fileToUpload = event.target.files[0];
    console.log(this.fileToUpload);
  }
  selectFile2(event: any): void {
    this.fileToUpload2 = event.target.files[0];
    console.log(this.fileToUpload2);
  }
  showFilephotoOuVideo(p) {
    this.selectedremis = p;
    console.log(this.selectedremis);
    this.remiseDeCleService
      .downloadFile(p.photoOuVideo)
      .subscribe((response) => {
        const blob = new Blob([response], {
          type: "application/octet-stream",
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = p.photoOuVideo;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
  }
  showFilesignature(p) {
    this.selectedremis = p;
    console.log(this.selectedremis);
    this.remiseDeCleService.downloadFile(p.signature).subscribe((response) => {
      const blob = new Blob([response], {
        type: "application/octet-stream",
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = p.signature;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }
}
