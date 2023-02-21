import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../angular-material-dialog/User';

import {  } from '../angular-material-dialog/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from './custom-error-state-error';

@Component({
  selector: 'app-user-dialog',
  template : 'passed-in{{data.name}}',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent {
  constructor(
  public dialogRef:MatDialogRef<UserDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data:User,
  ){}
  esMatcher=new CustomErrorStateMatcher();
  onCancelUserDailog():void{
    this.dialogRef.close();
  }
  UpdateForm=new FormGroup({
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl('',Validators.required),
    address_one:new FormControl('',Validators.required),
    address_two:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    postalCode:new FormControl('',Validators.required),
  })

  onFormSubmit(){

  }


  
}
