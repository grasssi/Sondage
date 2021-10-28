import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  errorMessages: any;

  formRules = {
    nonEmpty: '^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$',
    usernameMin: 5,
    passwordMin: 6,
    passwordPattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
  };

  formErrors = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    accept: false,
    service: '',
    nomService:'',
    owner:'',
    SerialNumber:'',
    ram:'',
    systeme:'',
    application:'',
    situation:''

  };

  constructor() {
    this.errorMessages = {
      firstName: {
        required: 'First name is required',
      },
      lastName: {
        required: 'Last name is required',
      },
      username: {
        required: 'Username is required',
        minLength: `'Username must be ${this.formRules.usernameMin} characters or more`
      },
      email: {
        required: 'required',
        email: 'Invalid email address',
      },
      password: {
        required: 'Password is required',
        pattern: 'Password must contain: numbers, uppercase and lowercase letters',
        minLength: `Password must be at least ${this.formRules.passwordMin} characters`
      },
      confirmPassword: {
        required: 'Password confirmation is required',
        passwordMismatch: 'Passwords must match'
      },
      role: {
        required: 'Role confirmation is required',
      },
      accept: {
        requiredTrue: 'You have to accept our Terms and Conditions'
      },
      service: {
        required: 'service confirmation is required',
      },
      nomService: {
        required: 'nomService confirmation is required',
      },
      owner: {
        required: 'owner  is required',
      },
      SerialNumber:{
        required:'SerialNumber is required '
      },
      ram:{
        required:'Ram is required '
      },
      systeme:{
        required:'Systeme is required '
      },
      application:{
        required:'application is required '
      },
      situation:{
        required:'situation is required '
      }
    };
  }
}
