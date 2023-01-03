import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CreditFormComponent } from './components/credit-form/credit-form.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { SucessFormPageComponent } from './pages/sucess-form-page/sucess-form-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CreditFormComponent,
    CreditCardsComponent,
    FormPageComponent,
    SucessFormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
