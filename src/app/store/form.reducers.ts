/* eslint-disable @typescript-eslint/no-unused-vars */
import { createReducer, on } from '@ngrx/store';
import { FormCredit } from '../models/form.model';
import { update } from './form.actions';


export const initialState = new FormCredit();

export const formReducer = createReducer(
  initialState,
  on(update, (state, { type, ...creditForm }) => creditForm)
);
