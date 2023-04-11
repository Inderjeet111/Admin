import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { Router } from 'express';
import { CommonUserService } from 'src/app/shared/services/common-user.service';

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
constructor( public fb:FormBuilder, public user:CommonUserService,
  private router:Router){
 
this.form=this.fb.group({
  firstName:[''],
  lastName:[''],
  email:['']
})
}


ngOnInIt(){
  console.log(this.form.value);
  
}


addUser(){

  this.user.addUser(this.form.value).subscribe(res=>{
    console.log(res);
    this.router.navigate(['users'])
  })
  
  
}
}
