import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormCredit } from 'src/app/models/form.model';
import { AppState } from 'src/app/store/store';


@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
})
export class CreditCardsComponent {
  creditForm!: FormCredit;

  constructor(private store: Store<AppState>) {
    store.subscribe(({ creditForm }) => {
      this.creditForm = creditForm;
    });
  }
}
