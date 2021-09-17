import { FieldConfigOption } from './field-config-option';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from './field-config.interface';

export interface Field {
  config: FieldConfigOption,
  group: FormGroup
}
