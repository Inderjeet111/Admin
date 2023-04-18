import { Component, OnInit } from '@angular/core';
import { CommonUserService } from 'src/app/shared/services/common-user.service';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public user: CommonUserService,public translate:TranslateService) { }
  //pie chart
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

  //line chart
  public lineChartData: ChartDataSets[] = [
    { data: [10, 15, 30, 20, 50], label: 'Users' }
  ];
  public lineChartLabels: Label[] = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
  public lineChartOptions: ChartOptions = {
    responsive: true
  };
  public lineChartColors = [
    {
      borderColor: '#21508a',
      backgroundColor: '#4e6d93',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];


  allUsers: any;
  userCount: any;
  allAdmins: any;
  adminCount: any;

  ngOnInit(): void {
  //   this.translate.get(['home.totalUsers', 'home.totalAdmins']).subscribe(translations => {
  //   // Update the pieChartLabels array with the translated values
  //   this.pieChartLabels = [translations['home.totalUsers'], translations['home.totalAdmins']];
  // });

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
