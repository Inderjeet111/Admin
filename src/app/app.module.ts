import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule,ROUTES } from '@angular/router';
import { HomeComponent } from './feature/panel/components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './feature/auth/components/admin/login/login.component';
import { AuthAdminGuard } from './feature/auth/components/admin/auth-admin.guard';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json" );
}

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    RouterModule,
    HttpClientModule,
  FormsModule,ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
    BrowserAnimationsModule,
    FormsModule, ToastrModule.forRoot()
  ],
  providers: [AuthAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
