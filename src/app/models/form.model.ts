interface ExpirationDate {
  month: string | number | null,
  year: string | number | null,
  cvc: string | number | null
}

export class FormCredit {
  cardNumber: string | number | null = '';
  cardHolderName: string | number | null = '';
  expirationDate: ExpirationDate = {
    month: '',
    year: '',
    cvc: ''
  };
}
