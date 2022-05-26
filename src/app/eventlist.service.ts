import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventlistService {

  constructor(private _http:HttpClient) { }
  baseUrlcontact:any="http://localhost:3000/api/post";
  listcontactbyuser(){
    return this._http.get<{message:string,contactData:any}>(this.baseUrlcontact+'/eventlist');
  }
}
