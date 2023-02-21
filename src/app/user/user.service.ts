import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  UpdateUser(editdata: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/Pratice1';

  GetAllContactData(): Observable<any>{
    return this.http.get<any>(this.url);
}
RemoveUser(id:number):Observable<any>{
  return this.http.delete(this.url+"/"+id)

}
GetElementById(id:number){
  return this.http.get(this.url+"/"+id)
}
UpdateData(data:any):Observable<any>{
  return this.http.put(this.url+"/"+data.id,data);
}
}
