import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormCredit } from 'src/app/models/form.model';
import { AppState } from 'src/app/store/store';
import * as actions from '../../store/form.actions';


const currentYear = new Date().getFullYear();

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
})
export class CreditFormComponent {

  public form = new FormGroup({
    cardNumber: new FormControl('', [Validators.required, Validators.min(1_000_000_000), Validators.max(10_000_000_000)]),
    cardHolderName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),

    // nested properties
    expirationDate: new FormGroup({
      month: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
      year: new FormControl('', [Validators.required, Validators.min(currentYear)]),
      cvc: new FormControl('', [Validators.required, Validators.min(1_000)]),
    })
  });

  constructor(private store: Store<AppState>) {
    this.form.valueChanges.subscribe(values => {
      store.dispatch(actions.update(values as FormCredit));
    });
  }

  get cardNumber() {
    return this.form.get('cardNumber');
  }

  get cardHolderName() {
    return this.form.get('cardHolderName');
  }

  get month() {
    return this.form.get('expirationDate.month');
  }

  get year() {
    return this.form.get('expirationDate.year');
  }

  get cvc() {
    return this.form.get('expirationDate.cvc');
  }

  onFormSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.form.reset();
  }
}
