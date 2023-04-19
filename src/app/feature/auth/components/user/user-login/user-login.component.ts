import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  form:FormGroup;
  
  constructor(public fb:FormBuilder,public router:Router,private toastr: ToastrService){
  this.form=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]]
  })
}
ngOnInit(): void {
}

loginUser(){
  localStorage.setItem('Token','true')
  this.router.navigate(['/chat'])
}
}
