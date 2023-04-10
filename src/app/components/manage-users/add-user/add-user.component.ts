import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {


// form=new FormGroup({
//   name:new FormControl(''),
//   email:new FormControl(''),
//   password:new FormControl('')
// })
form:FormGroup;
constructor( public fb:FormBuilder){
 
this.form=this.fb.group({
  name:[''],
  email:[''],
  password:['']

})
}


ngOnInIt(){
  console.log(this.form.value);
  
}


addUser(){
  console.log(this.form.value);
  
}
}
