import { createAction, props } from '@ngrx/store';
import { FormCredit } from '../models/form.model';


export const updateForm = createAction('[Form] updateForm', props<FormCredit>());
