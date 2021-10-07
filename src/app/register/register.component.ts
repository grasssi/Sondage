import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { ToasterService } from 'angular2-toaster';
import { matchingPasswords } from '../validators/matchingPasswords';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  submitted = false;
  registerForm: FormGroup = new FormGroup({});;

  constructor(private toasterService: ToasterService, private router: Router, private authservice: AuthserviceService) { }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repassword: new FormControl('', Validators.required),
    },
    {

      validators: [matchingPasswords]

    }
    );
  }
  register() {
    this.submitted = true;
console.log(this.registerForm.errors?.mismatchedPasswords);
    if (this.registerForm.invalid) { return };
    //with Services
       this.authservice.register(this.registerForm.value).subscribe((response:any) => {
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
