import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 
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
}
