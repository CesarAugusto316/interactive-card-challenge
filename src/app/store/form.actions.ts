import { createAction, props } from '@ngrx/store';
import { FormCredit } from '../models/form.model';


export const update = createAction('[Form] update', props<FormCredit>());
