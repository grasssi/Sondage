import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { UserserviceService } from '../services/userservice.service';

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
  });
  constructor(private UserService: UserserviceService, private router: Router, private authservice: AuthserviceService) { }
  ngOnInit(): void {
  }
  register() {
    this.submitted = true;
    if (this.profileForm.invalid) { return };
    //with Services
    this.authservice.register(this.profileForm.value).subscribe((response) => {
      this.router.navigate(['/login']);
    },
      (error) => {
        console.log(error);
      }
    );
  }
}
