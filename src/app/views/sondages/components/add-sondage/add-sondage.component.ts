import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { SondageService } from '../../../../services/sondage.service';
import { ValidationFormsService } from '../../../forms/validation-forms/validation-forms.service';
@Component({
  selector: 'app-add-sondage',
  templateUrl: './add-sondage.component.html',
  styleUrls: ['./add-sondage.component.css']
})
export class AddSondageComponent implements OnInit {
  submitted = false;
  formErrors: any;
  myRes: any;
  ownerForm = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    describe: new FormControl('', Validators.required),
    response: new FormControl(''),
    accept: new FormControl(false, Validators.requiredTrue)
  });



  constructor(private toasterService: ToasterService,
    private router: Router,
    private sondageservice: SondageService,
    public vf: ValidationFormsService) {
    this.formErrors = this.vf.errorMessages;
  }
  ngOnInit(): void {
  }

  get f() { return this.ownerForm.controls; }
  

  // affectService(body: any) {
  //   this.sondageservice.affectReponse(body).subscribe((response: any) => { },
  //     (error: any) => {
  //       this.toasterService.pop('error', 'Error', error.error.message);
  //       console.log(error);
  //     }
  //   );
  // }
  addSondage() {
    this.submitted = true;
    if (this.ownerForm.invalid) {
      return
    };
    //with Services
    const addsondage = this.sondageservice.addsondage(this.ownerForm.value).subscribe((response: any) => {
      this.toasterService.pop('success', 'Success Login', response.message);
      // this.affectService(this.ownerForm.value)
      this.router.navigate(['/sondages']);
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
