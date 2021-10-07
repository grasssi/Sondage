import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { matchingPasswords } from '../../../../validators/matchingPasswords';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  providers: [UserService]

})
export class UpdateUserComponent implements OnInit {
  submitted = false;
  id: any
  userForm: FormGroup = new FormGroup({});;
  constructor(private activatetRoute: ActivatedRoute, private router: Router, private usersService: UserService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('****', Validators.required),
      repassword: new FormControl(''),
      role: new FormControl(''),
    },
      {

        validators: [matchingPasswords]

      }
    );
    this.id = this.activatetRoute.snapshot.params.id;
    this.usersService.getuser(this.id).subscribe((response: any) => {
      this.userForm.patchValue(response)
    },
      (error) => {
        console.log(error);
      }
    );
  }

  updateuser() {

    console.log(!this.userForm?.value.repassword);
    this.submitted = true;
    if (this.userForm.invalid || !this.userForm?.value.repassword==true) {
      return
    }
      //with services
      this.usersService.updateuser(this.id, this.userForm.value).subscribe((response) => {
        this.router.navigate(['users'])
      },
        (error) => {
          console.log(error);
        }
        );

  }
}
