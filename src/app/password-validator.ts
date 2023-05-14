import { FormControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: FormControl): ValidationErrors | null {
  const value: string = control.value || '';
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasDigit = /\d/.test(value);
  const hasSpecialChar = /[@#+$]/.test(value);
  const isValid = hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && value.length >= 8;
  return isValid ? null : { 'passwordRequirements': true };
}
