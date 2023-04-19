import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../auth-service/auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  form:FormGroup;
  
  constructor(public fb:FormBuilder,public authAdmin:AuthServiceService,public router:Router,private toastr: ToastrService){
    this.form=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  ngOnInit(): void {
  }
  
  loginAdmin(){
    this.authAdmin.login(this.form.value).subscribe((res:any)=>{
      if(res.user){
        this.toastr.success(res.message,'',{
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'decreasing',
          positionClass: 'toast-top-right'
        });
        this.router.navigate(['/panel'])
        localStorage.setItem('token','true')

      }
    },
    (err)=>{
        console.log(err);
        console.log(err.status,'status milgya bhaiya');
        if(err.status===401){
              this.toastr.error(err.error.message,'',{
                timeOut: 3000,
                progressBar: true,
                progressAnimation: 'decreasing',
                positionClass: 'toast-top-right'
              });
            }
        
    })
    
  }
}
