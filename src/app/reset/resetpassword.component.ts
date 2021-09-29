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
  constructor(private router: Router, private authservice: AuthserviceService,private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.showSuccess();
  }

  showSuccess() {
    this.toasterService.pop('success', 'Success Toaster', 'Hello  '+this.profileForm.value.email);
  }

  forgot() {
    this.authservice.Forgot(this.profileForm.value.email).subscribe((response) => {
      this.router.navigate(['/login']);
    },
      (error) => {
        console.log(error);
      }
    );
  }


}
