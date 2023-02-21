import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../angular-material-dialog/User';
import * as alertify from 'alertifyjs';
import {  } from '../angular-material-dialog/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from './custom-error-state-error';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-dialog',
  template : 'passed-in{{data.name}}',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  editdata:any
  savedata:any

  constructor(
  public dialogRef:MatDialogRef<UserDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any,private service:UserService,private ref:MatDialogRef<UserDialogComponent>
  ){}
  ngOnInit() {
    //console.log(this.data);
    
    this.GetExistdata(this.data.id)
  }
  esMatcher=new CustomErrorStateMatcher();
  onCancelUserDailog():void{
    this.dialogRef.close();
  }
  UpdateForm=new FormGroup({
    id:new FormControl(),
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl('',Validators.required),
    address_one:new FormControl('',Validators.required),
    address_two:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    postalCode:new FormControl('',Validators.required),

  })

  onFormSubmit(){

      this.editdata.id = this.UpdateForm.getRawValue().id
      this.editdata. first_name = this.UpdateForm.getRawValue().first_name
      this.editdata.last_name = this.UpdateForm.getRawValue().last_name
      this.editdata.address_one = this.UpdateForm.getRawValue().address_one
      this.editdata.address_two = this.UpdateForm.getRawValue().address_two
      this.editdata.city = this.UpdateForm.getRawValue().city
      this.editdata.state = this.UpdateForm.getRawValue().state
      this.editdata.postalCode = this.UpdateForm.getRawValue().postalCode

      this.service.UpdateData(this.editdata).subscribe(item => {
        this.savedata = item;
        //console.log(this.updateform.getRawValue());
        this.savedata = item;
        if (this.savedata = item) {
          alertify.success("This is SuccessFully Updated");
          this.ref.close();
        } else {
          alertify.error("please Try again");
        }
      });
    

  }

  GetExistdata(id: any) {
    this.service.GetElementById(id).subscribe(item => {
      this.editdata = item;
      console.log(this.editdata.id);
      if (this.editdata != null) {
        this.UpdateForm.setValue({ id:this.editdata.id, first_name: this.editdata.first_name, last_name: this.editdata.last_name,address_one:this.editdata.address_one,address_two:this.editdata.address_two,
          city:this.editdata.city,state:this.editdata.state,postalCode:this.editdata.postalCode});
        }
        //this.updateform.setValue({userid: this.editdata.id, role: this.editdata.role, isActive: this.editdata.isActive});
      });

    

  }


  
}
