import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/shared/routes/apiRoutes';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(data:any){
    return this.http.post(ApiRoutes.adminLogin,data)
  }
}
