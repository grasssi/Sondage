import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  submitted = false;
  profileForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),

  })
  constructor(private router: Router, private authservice: AuthserviceService, private toasterService: ToasterService) { }

  ngOnInit(): void {
  }
  forgot() {
    this.submitted = true
    if (this.profileForm.invalid) {
      return
    } else {
      this.authservice.Forgot(this.profileForm.value).subscribe((response: any) => {
        this.toasterService.pop('success', 'Success Login', response.message);
        this.router.navigate(['/login']);
      },
        (error: any) => {
          this.toasterService.pop('error', 'Error', error.error.message);
          console.log(error);
        }
      );
    }
  }
}
