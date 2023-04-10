import { Component,OnInit } from '@angular/core';
import { CommonUserService } from 'src/app/shared/services/common-user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(public user:CommonUserService){}
  ngOnInit(): void {
    console.log("sasf");
    
    this.getList();
  }
  getList(){
    console.log("getlist");
    
    this.user.getUserList().subscribe(res=>{

      console.log(res,"list")
    })
 }
}
