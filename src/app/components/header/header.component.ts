import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private translate: TranslateService,){

  }

  isGerman: boolean=false;
 
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

ngOnInit() {
  if(localStorage.getItem('selectedLang')==='de'){
    this.isGerman=false;
    this.translate.use('de')
  }else{
    this.isGerman=true;
  }
  
  // this.switchLanguage();
  this.isGerman = this.translate.currentLang === 'de' ? true : false;
}

switchLanguage() {
  setTimeout(() => {
    //  spinner ends after 5 seconds 
    this.isGerman = !this.isGerman;
    if (this.isGerman) {
      this.translate.use('de');
      localStorage.setItem('selectedLang','de')
    } else {
      this.translate.use('en');
      localStorage.setItem('selectedLang','en')
    }
  }, 500);

}

}
