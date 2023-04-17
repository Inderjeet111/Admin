import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  searchText = '';
  isGerman: boolean = false;
  // reverse:boolean = false
  // sortBy:string='firstName';
  constructor(public user:CommonUserService,private spinner: NgxSpinnerService,private toastr: ToastrService,private route:Router){}
  ngOnInit(): void {
    this.getList();
  }

  reverse:boolean = false
  sortBy:string='firstName';
  getList(){
    console.log('hiiii');
    const orderBy = this.reverse ? 'DESC' : 'ASC';
    this.user.getUserList(this.searchText,this.sortBy,orderBy).subscribe(res=>{
      this.userList=res.users;
      console.log("getlist",this.userList);
    })
 }
 setOrder(value: string): void {
  if (this.sortBy === value) {
    this.reverse = !this.reverse;
  }
  this.sortBy = value;
 
  this.getList();
}
 getSearch(event: any, cond?: boolean, btn?: HTMLElement): void {
  let search;
  if (cond) {
    // this.clearFocus(event);
    search = event.value;
  } else {
    // this.clearFocus(event.target);
    search = event.target.value;
  }
  this.searchText = search ? search.trim() : search;
  this.spinner.show();
  this.getList();
  setTimeout(() => {
    this.spinner.hide()
  }, 500);
}
// getSearch(event: any, cond?: boolean, btn?: HTMLElement): void {
//   let search;
//   this.searchText = search ? search.trim() : search;
//   this.getCustomers();
// }

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

  getUserId(id: number) {
    console.log(id, 'user id');
    this.route.navigate(['panel/users/edituser',id])
  }
}
