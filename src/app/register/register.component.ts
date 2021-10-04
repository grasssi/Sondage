import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  submitted = false;
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repassword: new FormControl('', Validators.required),
  });
  constructor(private toasterService: ToasterService, private router: Router, private authservice: AuthserviceService) { }
  ngOnInit(): void {

  }
  register() {
    this.submitted = true;

    //need help
    // this.profileForm.validator = PasswordValidators.mismatchedPasswords(this.profileForm.value.password, this.profileForm.value.repassword);
    // console.log(this.profileForm.validator);
    // console.log(this.profileForm.hasError('mismatchedPasswords'));

    if (this.profileForm.invalid) { return };
    //with Services
       this.authservice.register(this.profileForm.value).subscribe((response:any) => {
        this.toasterService.pop('success', 'Success Login', response.message);
           this.router.navigate(['/login']);
    },
      (error:any) => {
      this.toasterService.pop('error', 'Error', error.error.message);
        console.log(error);
      }
    );
  }
}
