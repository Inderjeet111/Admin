import { Component, OnInit } from '@angular/core';
import { CommonUserService } from 'src/app/shared/services/common-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pieChartLabels = ['Total Users', 'Total Admins'];
  public pieChartData: any[] = [];
  public pieChartColors = [
    {
      backgroundColor: [
        '#21508a',
        '#4e6d93'
      ],
      hoverBackgroundColor: [
        '#21508a',
        '#4e6d93',
      ]
    }
  ];
  constructor(public user: CommonUserService) { }

  allUsers: any;
  userCount: any;
  allAdmins: any;
  adminCount: any;

  ngOnInit(): void {

    this.user.getHomeData().subscribe((res: any) => {
      if (res) {
        this.allUsers = res.users
        this.userCount = this.allUsers.length;
        this.allAdmins = res.admins
        this.adminCount = this.allAdmins.length;
        this.pieChartData.push(this.userCount, this.adminCount)
      }
    })
  }
}
