import { AbstractControl } from "@angular/forms";

export function matchingPasswords (control: AbstractControl): {[key: string]: boolean} | null
 {
    const newPassword = control.get('password');
    const confirmPassword = control.get('rePassword');
    // console.log("olaaa11=",newPassword?.value)
    // console.log("olaaa22=",confirmPassword?.value)

    // if no values, valid
    if (!newPassword?.value || !confirmPassword?.value) {
      return null;
    }
    // if values match return null, else 'mismatchedPasswords:true'
    return newPassword.value === confirmPassword.value ? null : { 'mismatchedPasswords': true };
  }
