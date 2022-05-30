import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http:HttpClient) { }
  baseUrl:any="http://localhost:3000/api/auth";
  registerUser(users:any){
    
    return this._http.post<{message:string,users:any}>(this.baseUrl+'/register',users);
  }
  loginUser(loginuser:any){
    return this._http.post<{message:string,userData:any,token:string}>(this.baseUrl+'/login',loginuser);
  }
}
