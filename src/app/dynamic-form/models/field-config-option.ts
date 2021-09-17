
import { ValidatorFn } from '@angular/forms';

export interface FieldConfigOption{

    title?: string,
    subtitle?: string,
    name?: string,
    options?: string[],
    placeholder?: string,
    type?: string,
    validation?: ValidatorFn[],
    //value?: any

}
