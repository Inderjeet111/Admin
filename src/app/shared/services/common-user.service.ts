import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes } from '../routes/apiRoutes';
@Injectable({
  providedIn: 'root'
})
export class CommonUserService {

  constructor(private http: HttpClient) { }

  getUserList(){
    return this.http.get(ApiRoutes.usersList);
  }
}
