import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { OwnerService } from '../../../../services/owner.service';
import { ServiceService } from '../../../../services/service.service';
import { ValidationFormsService } from '../../../forms/validation-forms/validation-forms.service';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: [
    './add-services.component.css',
    '../../../../../scss/vendors/ng-select/ng-select.scss'
  ]
})
export class AddServicesComponent implements OnInit {


  submitted = false;
  formErrors: any;
  myRes: any;
  allownersws:any;
  serviceForm = new FormGroup({
    nomService: new FormControl('', [Validators.required]),
    owner: new FormControl('', Validators.required),
    accept: new FormControl(false, Validators.requiredTrue)
  });



  constructor(private toasterService: ToasterService,
    private router: Router,
    private service: ServiceService,
    private serviceservice: ServiceService,
    private ownerservice: OwnerService,
    public vf: ValidationFormsService) {
    this.formErrors = this.vf.errorMessages;
  }
  ngOnInit(): void {
    this.allownerswse()
  }

  get f() { return this.serviceForm.controls; }
  //all owners
  allowners() {
    this.ownerservice.allowners().subscribe((response: any) => {
      this.myRes = response
      this.toasterService.pop('success', 'Success Login', response.message);
    },
      (error: any) => {
        this.toasterService.pop('error', 'Error', error.error.message);
        console.log(error);
      }
    );
  }
  //owners without service
  allownerswse() {
    this.ownerservice.allownersWs().subscribe((response: any) => {
      this.allownersws = response
      this.toasterService.pop('success', 'Success Login', response.message);
    },
      (error: any) => {
        this.toasterService.pop('error', 'Error', error.error.message);
        console.log(error);
      }
    );
  }
  // affectService(body: any) {
  //   this.service.affectService(body).subscribe((response: any) => { },
  //     (error: any) => {
  //       this.toasterService.pop('error', 'Error', error.error.message);
  //       console.log(error);
  //     }
  //   );
  // }

  addowner() {
    this.submitted = true;
    if (this.serviceForm.invalid) {
      return
    };
    //with Services
    const addowner = this.service.addservice(this.serviceForm.value).subscribe((response: any) => {
      this.toasterService.pop('success', 'Success Login', response.message);
      this.router.navigate(['/services']);
    },
      (error: any) => {
        this.toasterService.pop('error', 'Error', error.error.message);
        console.log(error);
      }
    );
  }

  onReset() {

    this.submitted = false;
    this.serviceForm.reset();

  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.serviceForm.invalid) {
      return;
    }

  }
}
