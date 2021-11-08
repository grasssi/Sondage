import { Component, TemplateRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
//import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SondageService, TableData } from '../../../../services/sondage.service';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-list-sondage',
  templateUrl: './list-sondage.component.html',
  styleUrls: ['./list-sondage.component.css'],
  providers: [SondageService, DatePipe]
})
export class ListSondageComponent implements OnInit {
  public filterQuery = '';
  public data: TableData;
  error: any;
  submitted = false;
  formErrors: any;
  response: any;
  modalRef: BsModalRef;
  repForm = new FormGroup({
    reponse: new FormControl(''),

  })
  @ViewChild('template') templateRef: TemplateRef<any>;
  myDate = new Date()
  d1 = new Date()
  d2 = new Date()
  constructor(private sondageService: SondageService,
    private toasterService: ToasterService,
    private router: Router,
    private datePipe: DatePipe,
  ) {

  }
  RepForm = new FormGroup({
    reponse: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.sondageService.allSondages().subscribe(
      (data: TableData) => {
        setTimeout(() => {
          this.data = [...data];
        }, 1000);
      }, // success path

      error => this.error = error // error path

    );
  }

  affect(idsujet: any) {
    this.submitted = true;
    //with Services

    const affectReponse = this.sondageService.affectReponse(this.repForm.value, idsujet).subscribe((response: any) => {
      //  window.location.reload();
      this.toasterService.pop('success', 'Success Vote', response.message);
      this.router.navigate(['/sondages']);
    },
      (error: any) => {
        this.toasterService.pop('error', 'Error', error.error.message);
        console.log(error);
      }
    );

  }
  getDifferenceInDays(date1, date2) {
    var diff = (date1.getTime() - date2.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }



  click = 0;
  clickFunc() {

    this.click += 1;
    localStorage.setItem('this.click', JSON.stringify(this.click))
    const test = localStorage.getItem('this.click')
    const timelogin: any = localStorage.getItem('timelogin')
    const currenttime: any = this.datePipe.transform(this.myDate, 'yyyy-MM-dd')
    const dt1 = new Date(timelogin);
    const dt2 = new Date(currenttime);
    const diff = this.getDifferenceInDays(dt1, dt2);
    console.log(diff);

    if ((Number(test) >= 5 && diff <= 1440)) { // placed inside the click function
      (<HTMLInputElement>document.getElementById("bt")).disabled = true;
    }
  }
}

