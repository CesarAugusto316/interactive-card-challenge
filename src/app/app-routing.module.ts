import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { FormPageComponent } from './pages/form-page/form-page.component';
import { SucessFormPageComponent } from './pages/sucess-form-page/sucess-form-page.component';


const routes: Routes = [
  { path: '', component: FormPageComponent },
  { path: 'sucess-form', component: SucessFormPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
