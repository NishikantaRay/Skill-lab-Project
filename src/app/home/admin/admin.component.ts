import { Component, OnInit } from '@angular/core';
import { EventlistService } from 'src/app/eventlist.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public Data:any[]=[];
  
  
  constructor(private _ps:EventlistService) { }
  loadContacts(){
    this._ps.listcontactbyuser().subscribe(Response=>{
      console.log(Response);
      this.Data=Response.contactData;
    },err=>{
      console.log(err);
    } )
  }
  ngOnInit(): void {
    this.loadContacts();
  }

}
