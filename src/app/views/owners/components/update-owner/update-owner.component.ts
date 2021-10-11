import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../../../../services/owner.service';
import { ServiceService } from '../../../../services/service.service';
import { ValidationService } from '../../../../validators/validation.service';

@Component({
  selector: 'app-update-owner',
  templateUrl: './update-owner.component.html',
  styleUrls: ['./update-owner.component.css']
})
export class UpdateOwnerComponent implements OnInit {

  submitted = false;
  id: any
  formErrors: any;
  myRes:any;
  ownerForm: FormGroup = new FormGroup({});;
  constructor(private activatetRoute: ActivatedRoute,
    private router: Router,
    private serviceservice:ServiceService,
    private ownerService: OwnerService,
    public vf: ValidationService) {
    this.formErrors = this.vf.errorMessages;
  }

  ngOnInit(): void {
    this.ownerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      service: new FormControl('', Validators.required),
      accept: new FormControl(false, Validators.requiredTrue)
    });

    this.id = this.activatetRoute.snapshot.params.id;
    this.ownerService.getowner(this.id).subscribe((response: any) => {
      this.ownerForm.patchValue(response)
    },
      (error) => {
        console.log(error);
      }
    );
    this.allservices()
  }
  get f() { return this.ownerForm.controls; }

  // get all services
  allservices(){
    this.serviceservice.allServices().subscribe((response: any) => {
      this.myRes=response

    },
      (error: any) => {
        console.log(error);
      }
    );
  }
  updateOwner() {

    this.submitted = true;
    if (this.ownerForm.invalid) {
      return
    }
    //with services
    this.ownerService.updateowner(this.id, this.ownerForm.value).subscribe((response) => {
      this.router.navigate(['owners'])
    },
      (error) => {
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
