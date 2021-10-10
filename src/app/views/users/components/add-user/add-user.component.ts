import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AuthserviceService } from '../../../../services/authservice.service';
import { ValidationService } from '../../../../validators/validation.service';



export const confirmPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirm = control.get('confirmPassword');
  return password && confirm && password.value === confirm.value ? null : { 'passwordMismatch': true };
};
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    submitted = false;
  formErrors: any;
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(this.vf.formRules.passwordMin), Validators.pattern(this.vf.formRules.passwordPattern)]),
    confirmPassword: new FormControl(''),
    role: new FormControl('', Validators.required),
    accept: new FormControl(false, Validators.requiredTrue)
  }, { validators: confirmPasswordValidator });



  constructor(private toasterService: ToasterService,
    private router: Router,
    private authservice: AuthserviceService,
    public vf: ValidationService) {
    this.formErrors = this.vf.errorMessages;
  }
  ngOnInit(): void {}

  get f() { return this.registerForm.controls; }

  register() {
    this.submitted = true;
       if (this.registerForm.invalid) {
      return
    };
    //with Services
    this.authservice.register(this.registerForm.value).subscribe((response: any) => {
      this.toasterService.pop('success', 'Success Login', response.message);
      this.router.navigate(['/users']);
    },
      (error: any) => {
        this.toasterService.pop('error', 'Error', error.error.message);
        console.log(error);
      }
    );
  }


  onReset() {

    this.submitted = false;
    this.registerForm.reset();

  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

  }
}
