import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),

  })
  constructor(private toasterService: ToasterService,
     private authservice: AuthserviceService,
      private router: Router) {
  }

  ngOnInit(): void {
    }
    login() {
    this.submitted = true;
    if(this.loginForm.invalid)
    {
      return;
    }
    this.authservice.login(this.loginForm.value).subscribe((response:any) => {
      this.toasterService.pop('success', 'Success Login', response.message);
      localStorage.setItem('token', response.token)
      this.router.navigate(['/dashboard']);
    },
    (error: any) => {
      console.log(error);
      this.toasterService.pop('error', 'Error', error.error.message);
      }
    );
  }
}
