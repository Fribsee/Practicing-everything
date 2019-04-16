import { AbstractControl, ValidationErrors } from '@angular/forms';


export class PasswordValidators {


    static shouldMatch(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== '1234') {
                    console.log('mosh!!');
                    resolve({ shouldMatch: true });
                } else {
                    resolve(null);
                }
            }, 1000);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value) {
             return { passwordsShouldMatch: true };
    } else {
        return null;
    }


    }

}

