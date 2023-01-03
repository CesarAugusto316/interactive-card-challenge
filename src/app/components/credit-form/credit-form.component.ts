import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styles: [
  ]
})
export class CreditFormComponent {

  public form = new FormGroup({
    cardNumber: new FormControl(''),
    cardHolderName: new FormControl(''),
    cvc: new FormControl(0),
    expirationDate: new FormGroup({
      month: new FormControl(''),
      year: new FormControl('')
    })
  });

  onFormSubmit(): void {
    console.log(this.form.value);
  }
}
