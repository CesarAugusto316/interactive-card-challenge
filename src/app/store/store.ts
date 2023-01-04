import { ActionReducerMap, } from '@ngrx/store';
import { FormCredit } from '../models/form.model';
import { formReducer } from './form.reducers';


export interface AppState {
  creditForm: FormCredit
}

export const store: ActionReducerMap<AppState> = { creditForm: formReducer };
