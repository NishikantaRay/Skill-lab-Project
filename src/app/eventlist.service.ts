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
  listcanteenbyuser(){
    return this._http.get<{message:string,canteenData:any}>(this.baseUrlcontact+'/canteenlist');
  }
  deleteContact(id: string) {
    return this._http.delete<{message: string}>(this.baseUrlcontact + '/delete/'+ id);
  }
  updatebooking(id: string,contact:any) {
    return this._http.put<{message: string}>(this.baseUrlcontact + '/updateEvent/' + id,contact);
  }
  updateeventbooking(id: string,contact:any) {
    return this._http.put<{message: string}>(this.baseUrlcontact + '/updatecanteen/' + id,contact);
  }
}
