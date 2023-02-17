import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../angular-material-dialog/User';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent {
  constructor(
  public dialogRef:MatDialogRef<UserDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data:User,
  ){}
  onCancelUserDailog():void{
    this.dialogRef.close();
  }
  
}
