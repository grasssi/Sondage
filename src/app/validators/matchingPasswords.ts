import { AbstractControl } from "@angular/forms";

export function matchingPasswords (control: AbstractControl): {[key: string]: boolean} | null
 {
    const newPassword = control.get('password');
    const confirmPassword = control.get('repassword');

    // if no values, valid
    if (!newPassword?.value || !confirmPassword?.value) {
      return null;
    }else if (newPassword.value == confirmPassword.value){
return { 'mismatchedPasswords': false };
}else
return { 'mismatchedPasswords': true };
    // if values match return null, else 'mismatchedPasswords:true'
   // return newPassword.value === confirmPassword.value ? null : { 'mismatchedPasswords': true };
  }
