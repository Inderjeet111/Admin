import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthServiceService } from '../../../auth-service/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { config } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm: FormGroup;
  constructor(
    public authAdmin: AuthServiceService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    //     this.signupForm=new FormGroup({
    // name:new FormControl(''),
    // email:new FormControl(''),
    // password:new FormControl(''),
    // confirmPassword:new FormControl('')
    //     })

    this.signupForm = this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(12),
          ],
        ],
        email: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15),
          ],
        ],
        confirmPassword: ['', Validators.required],
      }
      
    );
  }

  ngOnInIt() {}

  get signupControl() {
    return this.signupForm.controls;
  }

  submit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      let data = { ...this.signupForm.value };
      delete data.confirmPassword;
      console.log(data, 'after delete');
      this.authAdmin.signUp(this.signupForm.value).subscribe((res: any) => {
        console.log(res);
        if (res.status == 300) {
          this.toastr.error('Failed', res.message, {
            timeOut: 3000,
            progressBar: true,
            progressAnimation: 'decreasing',
            positionClass: 'toast-top-right',
          });
          return;
        }
      });
    } else {
      console.log('invalid form ');
    }
  }
}
