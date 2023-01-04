import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditFormComponent } from './components/credit-form/credit-form.component';

// pages
import { SucessFormPageComponent } from './pages/sucess-form-page/sucess-form-page.component';

const routes: Routes = [
  { path: '', component: CreditFormComponent },
  { path: 'sucess-form', component: SucessFormPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
