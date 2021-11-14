import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservabledemoComponent } from './observabledemo/observabledemo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';

const routes: Routes = [
  { path:'tempForm', component:TempDrivenFormComponent},
  { path:'reactiveForm', component:ReactiveFormComponent},
  { path:'observable', component:ObservabledemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
