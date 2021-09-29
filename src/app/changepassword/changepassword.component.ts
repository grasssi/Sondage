import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  submitted = false;
  profileForm = new FormGroup({
    newPass: new FormControl(''),
    resetlink: new FormControl('')

  })
  constructor(private router: Router, private authservice: AuthserviceService, private activatetRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  changepwd() {
    this.profileForm.value.resetlink = this.activatetRoute.snapshot.params.resetlink;
    this.authservice.changePwd(this.profileForm.value).subscribe((response) => {
      this.router.navigate(['/login']);

    },
      (error) => {
        console.log(error);
      }
    );
  }
}
