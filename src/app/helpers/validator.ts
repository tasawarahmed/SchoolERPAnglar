import { FormGroup } from "@angular/forms";

export function MustMatch(password: string, confirmPassword: string){
  return (formGroup: FormGroup) => {
    const confirmPasswordControl = formGroup.controls['confirmPassword'];
    const passwordControl = formGroup.controls['password'];

    if(confirmPasswordControl.errors && !confirmPasswordControl.errors['MustMatch']){
      return;
    }

    if(passwordControl.value !== confirmPasswordControl.value){
      confirmPasswordControl.setErrors({mustMatch: true});
    }
    else{
      confirmPasswordControl.setErrors(null);
    }
  }
}
