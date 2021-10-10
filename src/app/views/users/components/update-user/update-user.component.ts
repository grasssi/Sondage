import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { matchingPasswords } from '../../../../validators/matchingPasswords';
import { ValidationService } from '../../../../validators/validation.service';

/** passwords must match - custom validator */
export const confirmPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirm = control.get('confirmPassword');
  return password && confirm && password.value === confirm.value ? null : { 'passwordMismatch': true };
};

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  providers: [UserService]

})
export class UpdateUserComponent implements OnInit {
  submitted = false;
  id: any
  formErrors: any
  userForm: FormGroup = new FormGroup({});;
  constructor(private activatetRoute: ActivatedRoute,
    private router: Router,
    private usersService: UserService,
    public vf: ValidationService) {
    this.formErrors = this.vf.errorMessages;
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(this.vf.formRules.passwordMin), Validators.pattern(this.vf.formRules.passwordPattern)]),
      confirmPassword: new FormControl(''),
      role: new FormControl('', Validators.required),
      accept: new FormControl(false, Validators.requiredTrue)
    }, { validators: confirmPasswordValidator });


    this.id = this.activatetRoute.snapshot.params.id;
    this.usersService.getuser(this.id).subscribe((response: any) => {
      this.userForm.patchValue(response)
    },
      (error) => {
        console.log(error);
      }
    );
  }
  get f() { return this.userForm.controls; }

  updateuser() {

    this.submitted = true;
    if (this.userForm.invalid) {
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


  onReset() {

    this.submitted = false;
    this.userForm.reset();

  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

  }
}
