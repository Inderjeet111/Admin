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
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  ngOnInit(): void {
    if(localStorage.getItem('token')=='true'){
      this.router.navigate(['/panel'])
    }
    
  }
  
  loginAdmin(){
    console.log(this.form.value);
    let ob= {ob2:{name:'ayush',age:34}}
    console.log(ob.ob2);
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

      }else{
        if(res){
          console.log(res.message);
          this.toastr.error(res.message,'',{
            timeOut: 3000,
            progressBar: true,
            progressAnimation: 'decreasing',
            positionClass: 'toast-top-right'
          });
        }
      }
    })
  }
}
