import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { Form1Component } from './form1/form1.component';
import { AngularMaterialDialogComponent } from './angular-material-dialog/angular-material-dialog.component';

const routes: Routes = [
  {
    path:"user",
    component:UserComponent
  },
  {
    path:"Form1",
    component:Form1Component
  },
  {
    path:"dailog-box",
    component:AngularMaterialDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
