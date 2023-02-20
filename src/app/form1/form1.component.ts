import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from './custom-error-state-error';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  ngOnInit(): void {
  }
  constructor(
    private formBuilder: FormBuilder,
) {} 
  esMatcher=new CustomErrorStateMatcher();
  amount=new FormControl('',Validators.required)
  onAmountChange(){
    console.log(this.amount.value);
    
  }
  commentFC=new FormControl();

  onCommentChange(){
    console.log(this.commentFC.value);
    
  }
  city=new FormControl('',Validators.required)

  OncityChange(){
      console.log(this.city.value);
      
    }

    myCity=new FormControl('',Validators.required)
  
  //Create a form
  personForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    address: ['', [Validators.required, Validators.maxLength(100)]],
    favColor: '#e66465',
    dob: '',
    tob: '',
    age: ''
  });
  onFormSubmit() {
    //this.personService.savePerson(this.personForm.value);
  }
  get username() {
    return this.personForm.get('username');
  }  
  get password() {
    return this.personForm.get('password');
  }  

  get address() {
    return this.personForm.get('address');
  }

    
  
}
