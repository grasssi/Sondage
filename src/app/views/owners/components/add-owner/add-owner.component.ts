import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { OwnerService } from '../../../../services/owner.service';
import { ServiceService } from '../../../../services/service.service';
import { ValidationFormsService } from '../../../forms/validation-forms/validation-forms.service';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {
  submitted = false;
  formErrors: any;
  myRes:any;
  ownerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    service: new FormControl('', Validators.required),
    accept: new FormControl(false, Validators.requiredTrue)
  });



  constructor(private toasterService: ToasterService,
    private router: Router,
    private ownerservice: OwnerService,
    private serviceservice:ServiceService,
    public vf: ValidationFormsService) {
    this.formErrors = this.vf.errorMessages;
  }
  ngOnInit(): void {
    this.allservices()
  }

  get f() { return this.ownerForm.controls; }
allservices(){
  this.serviceservice.allServices().subscribe((response: any) => {
    this.myRes=response
    this.toasterService.pop('success', 'Success Login', response.message);

  },
    (error: any) => {
      this.toasterService.pop('error', 'Error', error.error.message);
      console.log(error);
    }
  );
}
  addowner() {
    this.submitted = true;
       if (this.ownerForm.invalid) {
      return
    };

    //with Services
    this.ownerservice.addowner(this.ownerForm.value).subscribe((response: any) => {
      this.toasterService.pop('success', 'Success Login', response.message);
      this.router.navigate(['/owners']);
    },
      (error: any) => {
        this.toasterService.pop('error', 'Error', error.error.message);
        console.log(error);
      }
    );
  }


  onReset() {

    this.submitted = false;
    this.ownerForm.reset();

  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.ownerForm.invalid) {
      return;
    }

  }
}
