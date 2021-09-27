import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  submitted = false;
  profileForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),

  })
  constructor(private toasterService: ToasterService,private authservice:AuthserviceService, private router:Router) { }

  ngOnInit(): void {
    this.showSuccess();
  }

  showSuccess() {
    this.toasterService.pop('success', 'Success Toaster', 'Hello  '+this.profileForm.value.email);
  }

  auth(){
    this.authservice.login(this.profileForm.value).subscribe((response) => {
      this.router.navigate(['/dashboard']);

    },
      (error) => {
        console.log(error);
      }
    );
  }

}
