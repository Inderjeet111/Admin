import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CommonUserService } from 'src/app/shared/services/common-user.service';

@Component({
  selector: 'app-panel-main',
  templateUrl: './panel-main.component.html',
  styleUrls: ['./panel-main.component.scss'],
})
export class PanelMainComponent {
  constructor(
    private translate: TranslateService,
    private spinner: NgxSpinnerService,
    private router:Router,
    private toastr: ToastrService,
   ) {}

  isGerman: boolean = false;
  selectedItem: string = 'Item 1';
  
  ngOnInit() {
    
    if (localStorage.getItem('selectedLang') === 'de') {
      this.isGerman = false;
      this.translate.use('de');
    } else {
      this.isGerman = true;
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
        localStorage.setItem('selectedLang', 'de');
      } else {
        this.translate.use('en');
        localStorage.setItem('selectedLang', 'en');
      }
      this.spinner.hide();
    }, 500);
  }

  selectItem(item: string): void {
    this.selectedItem = item;
    if(this.selectedItem=='Item 3'){
      localStorage.removeItem('token');
      this.toastr.error('Successfully!','Logout', {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'decreasing',
        positionClass: 'toast-top-right'
      });
      this.router.navigate(['/login'])
    }
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }


}
