import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes } from '../routes/apiRoutes';
@Injectable({
  providedIn: 'root'
})
export class CommonUserService {

  constructor(private http: HttpClient) { }

  getUserList(search:string,sortBy:string,orderBy:string){
    return this.http.get<any>(ApiRoutes.usersList+ '?search=' + search + '&order=' + sortBy + '&orderBy=' + orderBy);
  }
  
  addUser(userData:any){
    return this.http.post<any>(ApiRoutes.insertUser,userData);
  }
changeStatus(id:any,status:boolean){
    this.http.put<any>(ApiRoutes.updateUser+'/'+`${id}`,status)
}
 deleteUser(userId:any) {
    return  this.http.delete(ApiRoutes.deleteUser+'/'+`${userId}`)
  }

  // Home

  getHomeData(){
    return this.http.get<any>(ApiRoutes.home)
  }

  getUserById(userId:any){
    return this.http.get<any>(ApiRoutes.userData+'/'+`${userId}`);
  }

  updateUser(userId:any,data:any){
    return this.http.put<any>(ApiRoutes.updateUser+'/'+`${userId}`,data)
  }
}
