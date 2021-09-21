import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormOptionAsyncValidatorFnService implements AsyncValidator{

  constructor() { }
    validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {


        return
    }
    registerOnValidatorChange?(fn: () => void): void {

    }
}
