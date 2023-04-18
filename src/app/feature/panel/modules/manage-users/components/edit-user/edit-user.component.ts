import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CommonUserService } from 'src/app/shared/services/common-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  userId: any;
  form: FormGroup;
  userData: any;
  constructor(private route: ActivatedRoute,
    public fb: FormBuilder,
    private http: HttpClient,
    private user: CommonUserService,
    private spinner: NgxSpinnerService, 
    private toastr: ToastrService,
    private router :Router) {

    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })



    this.route.params.subscribe(params => {
      this.userId = + params['id'];
      console.log(this.userId, 'param id');

      this.user.getUserById(this.userId).subscribe(res => {
        this.userData = res;
        console.log(this.userData, 'aaaaaaaaaaaaaaa');

        this.form.patchValue({
          firstName: this.userData?.firstName,
          lastName: this.userData?.lastName,
          email: this.userData?.email
        });

      });
    });

  }

  updateUser() {
    console.log(this.form.value, 'qqqqqqqqq');
    this.user.updateUser(this.userId, this.form.value).subscribe(res => {
      console.log(res?.status,'resp');
      this.toastr.success('Successfully!', 'User Updated', {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'decreasing',
        positionClass: 'toast-top-right'
      });
      this.router.navigate(['panel/users'])

      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide()
      }, 500);
      
    })
  }
}

