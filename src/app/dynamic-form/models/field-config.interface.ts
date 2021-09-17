import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
    title?: string,
    subtitle?: string,
    disabled?: boolean,
    label?: string,
    name: string,
    options?: string[],
    placeholder?: string,
    type: string,
    validation?: ValidatorFn[],
    value?: any
}
