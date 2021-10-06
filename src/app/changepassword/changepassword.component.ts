import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  submitted = false;
  mailForm = new FormGroup({
    newPass: new FormControl(''),
    resetlink: new FormControl('')

  })
  constructor(private toasterService: ToasterService,
    private router: Router,
    private authservice: AuthserviceService,
    private activatetRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  changepassword() {
    this.mailForm.value.resetlink = this.activatetRoute.snapshot.params.resetlink;
    this.authservice.changepassword(this.mailForm.value).subscribe((response: any) => {
      this.toasterService.pop('success', 'Success', response.message);
      this.router.navigate(['/login']);
    },
      (error) => {
        console.log(error);
        this.toasterService.pop('error', 'Error', error.error.message);
      }
    );
  }
}
