import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { ResponseUser } from './response-user';  
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserManagmentService {

  private baseUrl = 'http://localhost:8080/';  

  constructor(private http:HttpClient) { }  

  getUserList(){  
    return this.http.get<ResponseUser>(`${this.baseUrl}`+'getAllUsers');
  }  
  
  createUser(user: User): Observable<object> {  
    let body = JSON.stringify(user);            
  return this.http.post(`${this.baseUrl}`+'saveUserdetails',body)
  }
  
  getUserBYUserName(userName: String):Observable<any>{  
    return this.http.post(`${this.baseUrl}'+'getUserBYUserName`,userName);  
  }  

  
  deleteUser(user: User): Observable<any> {  
    let body = JSON.stringify(user);            
  return this.http.post(`${this.baseUrl}`+'hardDelete',body)
  }  
  
  createUserMaster(user: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'createUser', user);  
  }  
  
  updateUser(userNmae: String, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/editUserDetails/${userNmae}`, value);  
  }  

}
