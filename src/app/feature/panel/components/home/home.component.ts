import { Component, OnInit } from '@angular/core';
import { CommonUserService } from 'src/app/shared/services/common-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public pieChartLabels = [ 'Active Users', 'Inactive Users','Rejected Users'];
  public pieChartData = [5, 3,2];
  public pieChartColors = [
    {
        backgroundColor: [
            '#645CBB',
            '#A084DC',
            '#BFACE2'
        ],
        hoverBackgroundColor:[
            '#645CBB',
            '#A084DC',
            '#BFACE2'
        ]
    }
];
constructor(public user:CommonUserService){}

allUsers:any;
allAdmins:any;

ngOnInit(): void{
  
  this.user.getHomeData().subscribe((res:any)=>{
    if(res){

      this.allUsers= res.users
      this.allAdmins= res.admins
      console.log(res);
      
    }
  })
}
}
