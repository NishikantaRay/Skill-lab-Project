import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private _http:HttpClient) { }
  baseUrl:any="http://localhost:3000/api/post";
  registerfeed(infos:any){
    return this._http.post<{message:string,infos:any}>(this.baseUrl+'/addFeed',infos);
  }
}
