import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../../../../services/owner.service';
import { ServiceService } from '../../../../services/service.service';
import { ValidationService } from '../../../../validators/validation.service';

@Component({
  selector: 'app-update-services',
  templateUrl: './update-services.component.html',
  styleUrls: ['./update-services.component.css']
})
export class UpdateServicesComponent implements OnInit {
  submitted = false;
  id: any;
  myRes: any;
  formErrors: any;
  serviceForm: FormGroup = new FormGroup({});;
  constructor(private activatetRoute: ActivatedRoute,
    private router: Router,
    private service: ServiceService,
    private ownerService: OwnerService,
    public vf: ValidationService) {
    this.formErrors = this.vf.errorMessages;
  }

  ngOnInit(): void {
    this.serviceForm = new FormGroup({
      nomService: new FormControl('', [Validators.required]),
      owner: new FormControl('', [Validators.required]),

      accept: new FormControl(false, Validators.requiredTrue)
    });


    this.id = this.activatetRoute.snapshot.params.id;
    this.service.getservice(this.id).subscribe((response: any) => {
      this.serviceForm.patchValue(response)
    },
      (error) => {
        console.log(error);
      }
    );
    this.owners();
  }
  get f() { return this.serviceForm.controls; }

  owners() {
    this.ownerService.allowners().subscribe((response: any) => {
      this.myRes = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }


  updateservice() {

    this.submitted = true;
    if (this.serviceForm.invalid) {
      return
    }
    //with services
    this.service.updateservice(this.id, this.serviceForm.value).subscribe((response) => {
      this.service.affectService(this.id, this.serviceForm.value).subscribe()
      this.router.navigate(['services'])
    },
      (error) => {
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
