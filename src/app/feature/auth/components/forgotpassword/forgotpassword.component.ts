import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {

  forgotForm:FormGroup;
constructor(){
  this.forgotForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl('')
  })
}

  ngOnInIt(){

  }
  submit(){
    console.log(this.forgotForm.value);
    
    
  }
}
