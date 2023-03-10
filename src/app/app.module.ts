import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { MaterialModule } from './Material-Module';
import { Form1Component } from './form1/form1.component';
import { AngularMaterialDialogComponent } from './angular-material-dialog/angular-material-dialog.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { Pratice1Component } from './pratice1/pratice1.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    Form1Component,
    AngularMaterialDialogComponent,
    UserDialogComponent,
    Pratice1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    HttpClientModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
