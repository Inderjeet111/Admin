import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../../auth-service/auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
signupForm:FormGroup;
  constructor(public authAdmin:AuthServiceService,private toastr: ToastrService){
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
    let data = {...this.signupForm.value}
    delete data.confirmPassword
    console.log(data,"after delete");
    this.authAdmin.signUp(this.signupForm.value).subscribe((res:any)=>{
      console.log(res)
      if(res.status==300){
        this.toastr.error('Failed',res.message, {
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'decreasing',
          positionClass: 'toast-top-right'
        });
        return
      }
    })
  }
}
