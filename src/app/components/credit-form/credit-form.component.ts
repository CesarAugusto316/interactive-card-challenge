import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormCredit } from 'src/app/models/form.model';
import { AppState } from 'src/app/store/store';
import * as actions from '../../store/form.actions';
import * as formCredit from '../../store/form.reducers';


@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
})
export class CreditFormComponent implements OnInit {

  public formCredit!: FormGroup<{
    cardNumber: FormControl<string | number | null>; cardHolderName: FormControl<string | number | null>;
    expirationDate: FormGroup<{
      // nested formControls
      month: FormControl<string | number | null>;
      year: FormControl<string | number | null>;
      cvc: FormControl<string | number | null>;
    }>;
  }>;

  constructor(private store: Store<AppState>) {
    const { cardHolderName, cardNumber, expirationDate: { cvc, month, year } } = formCredit.initialState;

    this.formCredit = new FormGroup({
      cardNumber: new FormControl(cardNumber, [Validators.required, Validators.min(1_000_000_000), Validators.max(10_000_000_000)]),
      cardHolderName: new FormControl(cardHolderName, [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      expirationDate: new FormGroup({
        month: new FormControl(month, [Validators.required, Validators.min(1), Validators.max(12)]),
        year: new FormControl(year, [Validators.required, Validators.min(new Date().getFullYear())]),
        cvc: new FormControl(cvc, [Validators.required, Validators.min(1_000)]),
      })
    });
  }

  ngOnInit(): void {
    this.formCredit.valueChanges.subscribe(values => {
      this.store.dispatch(actions.update(values as FormCredit));
    });
  }

  get cardNumber() {
    return this.formCredit.get('cardNumber');
  }

  get cardHolderName() {
    return this.formCredit.get('cardHolderName');
  }

  get month() {
    return this.formCredit.get('expirationDate.month');
  }

  get year() {
    return this.formCredit.get('expirationDate.year');
  }

  get cvc() {
    return this.formCredit.get('expirationDate.cvc');
  }

  onFormSubmit(): void {
    if (this.formCredit.invalid) {
      return;
    }
    this.formCredit.reset();
  }
}
