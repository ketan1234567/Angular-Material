import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { MatTableDataSource, MatTableDataSource as dataSource } from '@angular/material/table';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable, ReplaySubject } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  ani:any
  dataToDisplay:any
  ELEMENT_DATA:any
  //dataSource:any
  displayedColumns: Array<string> = [];

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  
  ngOnInit(): void {
 
    this.GetAllData()
  this.displayedColumns=['id', 'first_name', 'last_name', 'address_one','address_two','city','state','postalCode','Actions'];
    this.dataSource = (<any>this.service.GetAllContactData()).GetAllContactData;
    console.log(this.dataSource);
    
  }



  constructor(private service:UserService){}
  UserForm=new FormGroup({
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl('',Validators.required),
    address_one:new FormControl('',Validators.required),
    address_two:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    postalCode:new FormControl('',Validators.required)


  });
  OnFormSubmit(){
   console.log(this.UserForm.value);
  }
  GetAllData(){
    this.service.GetAllContactData().subscribe(data=>{
      this.ani=data;
      console.log(data)
     // this.dataSource=data;
      this.dataSource = new MatTableDataSource(data);
      ///this.dataSource = new MatTableDataSource<User[]>(this.ani);
      this.ELEMENT_DATA = new MatTableDataSource(data);
    })
    
  }

applyFilter(event:Event)
{
  const filterValue=(event?.target as HTMLInputElement).value;
  this.dataSource.filter=filterValue.trim().toLocaleLowerCase();
console.log(this.dataSource.filter);

  
}



addData() {
  const randomElementIndex = Math.floor(Math.random() * dataSource.length);
  this.dataToDisplay = [...this.dataToDisplay, this.ELEMENT_DATA[randomElementIndex]];
  
  //this.dataSource.setData(this.dataToDisplay);
}

removeData() {
  this.dataToDisplay = this.dataToDisplay.slice(0, -1);
  //this.dataSource.setData(this.dataToDisplay);
}
}
class ExampleDataSource extends DataSource<any> {
  private _dataStream = new ReplaySubject<any>();

  constructor(initialData: any) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<any> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: any) {
    this._dataStream.next(data);
  }


}