import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


const currentYear = new Date().getFullYear();

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
})
export class CreditFormComponent {

  public form = new FormGroup({
    cardNumber: new FormControl('', [Validators.required, Validators.min(1_000_000_000)]),
    cardHolderName: new FormControl('', [Validators.required, Validators.minLength(3)]),

    // nested properties
    expirationDate: new FormGroup({
      month: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
      year: new FormControl('', [Validators.required, Validators.min(currentYear)]),
      cvc: new FormControl('', [Validators.required, Validators.min(1_000_000)]),
    })
  });

  get validCardNumber() {
    return this.form.get('cardNumber')?.valid;
  }

  constructor() {
    this.form.valueChanges.subscribe(() => {
      console.log(this.validCardNumber);
    });
  }

  onFormSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
