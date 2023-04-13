import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
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
  private router:Router,private spinner: NgxSpinnerService,private toastr: ToastrService){
 
this.form=this.fb.group({
  firstName:['',[Validators.required]],
  lastName:['',[Validators.required]],
  email:['',[Validators.required]]
})
}


ngOnInIt(){
  // this.toastr.success('Hello world!', 'Toastr fun!', {
  //   timeOut: 3000,
  //   progressBar: true,
  //   progressAnimation: 'decreasing',
  //   positionClass: 'toast-top-right'
  // });
  console.log(this.form.value);
  
}


addUser(){
 this.spinner.show()
  this.user.addUser(this.form.value).subscribe(res=>{
    console.log(res);
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
    this.toastr.success('Successfully!','User Added', {
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'decreasing',
      positionClass: 'toast-top-right'
    });
    this.router.navigate(['panel/users'])
  })
  
  
}


cancel(){
  this.router.navigate(['panel/users'])
}
}
