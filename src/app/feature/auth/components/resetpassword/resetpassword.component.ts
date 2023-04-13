import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent {

  resetForm:FormGroup;
constructor(){
  this.resetForm=new FormGroup({
    oldpassword:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl('')
  })
}

  ngOnInIt(){

  }
  resetpassword(){
    console.log(this.resetForm.value);
    
    
  }
}
