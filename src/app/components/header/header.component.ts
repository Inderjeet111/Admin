import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private translate: TranslateService,private spinner: NgxSpinnerService){

  }

  isGerman: boolean=false;
  selectedItem: string = 'Item 1'; 
 
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
  this.spinner.show();
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
    this.spinner.hide();
  }, 500);

}

selectItem(item: string): void {
  this.selectedItem = item;
  this.spinner.show();
  setTimeout(() => {
    this.spinner.hide();
  }, 500);
}

}
