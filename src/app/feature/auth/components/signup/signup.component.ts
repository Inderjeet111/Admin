import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
signupForm:FormGroup;
  constructor(){
    this.signupForm=new FormGroup({
name:new FormControl(''),
email:new FormControl(''),
password:new FormControl(''),
confirmPassword:new FormControl('')
    })
  
  }
  
  ngOnInIt(){

    
    
  }
  
  submit(){
    console.log(this.signupForm.value);

  }
}
