import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from './User';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-angular-material-dialog',
  templateUrl: './angular-material-dialog.component.html',
  styleUrls: ['./angular-material-dialog.component.css']
})
export class AngularMaterialDialogComponent implements OnInit {
  ngOnInit(): void {
  }
  user={name:'',city:''}
  dailogRef:any;

  constructor(public dialog:MatDialog){}


  operUserDialog(){
    this.dailogRef=this.dialog.open(UserDialogComponent,
      {
       data:this.user,
       height:'450px',
       width:'25%',
       position:{top: '30px', right:'35%'} 
      });

      this.dailogRef.afterClosed().subscribr((result:User)=>{
        console.log("User Dailog Box Closed");
        console.log(result?.name+'-'+result?.city);
      })
  }
}
