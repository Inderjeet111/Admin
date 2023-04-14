import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CommonUserService } from 'src/app/shared/services/common-user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  userList:any=[]
  constructor(public user:CommonUserService,private spinner: NgxSpinnerService,private toastr: ToastrService){}
  ngOnInit(): void {
    console.log("sasf");
    
    this.getList();
  }
  getList(){
   
    console.log('hiiii');
    
    this.user.getUserList().subscribe(res=>{
      this.userList=res.users;
      console.log("getlist",this.userList);
    })
 }

 deleteUser(id:number){
  this.spinner.show()
  this.user.deleteUser(id).subscribe(res=>{
    this.toastr.error('Successfully!','User Deleted', {
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'decreasing',
      positionClass: 'toast-top-right'
    });
    console.log(res);
    this.getList();
    setTimeout(() => {
      this.spinner.hide()
    }, 500);
  })
}
}
      
