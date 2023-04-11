import { Component,OnInit } from '@angular/core';
import { CommonUserService } from 'src/app/shared/services/common-user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  userList:any=[]
  constructor(public user:CommonUserService){}
  ngOnInit(): void {
    console.log("sasf");
    
    this.getList();
  }
  getList(){
   
    
    this.user.getUserList().subscribe(res=>{
      this.userList=res.users;
      console.log("getlist",this.userList);
    })
 }
}
