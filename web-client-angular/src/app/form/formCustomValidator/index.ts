import { AbstractControl, ValidationErrors } from '@angular/forms';

export function agreeTermsValid(control: AbstractControl): ValidationErrors {
  return control.value !== true
    ? { agreeTermsValid: true }
    : { agreeTermsValid: false };
}
