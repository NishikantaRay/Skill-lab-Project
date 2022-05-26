import { Component, OnInit } from '@angular/core';
import { EventlistService } from 'src/app/eventlist.service';
@Component({
  selector: 'app-alleventlist',
  templateUrl: './alleventlist.component.html',
  styleUrls: ['./alleventlist.component.css']
})
export class AlleventlistComponent implements OnInit {
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
