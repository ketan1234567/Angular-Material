import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { Form1Component } from './form1/form1.component';

const routes: Routes = [
  {
    path:"user",
    component:UserComponent
  },
  {
    path:"Form1",
    component:Form1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
