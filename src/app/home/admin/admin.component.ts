import { Component, OnInit } from '@angular/core';
import { EventlistService } from 'src/app/eventlist.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public Data:any[]=[];
  public CanteenData:any[]=[];
  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  public contactId!: string;
  constructor(private _ps:EventlistService,private _acroute:ActivatedRoute) { }
  loadContacts(){
    this._ps.listcontactbyuser().subscribe(Response=>{
      console.log(Response);
      this.Data=Response.contactData;
    },err=>{
      console.log(err);
    } )
  }
  loadCanteendata(){
    this._ps.listcanteenbyuser().subscribe(Response=>{
      console.log(Response);
      this.CanteenData=Response.canteenData;
    },err=>{
      console.log(err);
    } )
  }
  ngOnInit(): void {
    this.loadContacts();
    this.loadCanteendata();
    this._acroute.params.subscribe(params => {
      this.contactId = params['id'];
    
    })
  }
  onDeleteContact(contact:any){
    this._ps.deleteContact(contact._id).subscribe(res=>{
      this.message=res.message;
      this.isSuccess=true;
      this.isError=false;
    }, err=>{
      this.message=err.error.message;
        this.isSuccess=false;
        this.isError=true;
    });
    this.loadContacts();
  }
  addUpdateForm(contact:any): void {
    this._ps.updatebooking(contact._id,contact).subscribe(res=>{
      this.message = res.message;
      this.isError = false;
      this.isSuccess = true;
    }, err=>{
      this.message = err.error.message;
      this.isError = true;
      this.isSuccess = false;
    })
  }
  addUpdatecanteenForm(contact:any): void {
    this._ps.updateeventbooking(contact._id,contact).subscribe(res=>{
      this.message = res.message;
      this.isError = false;
      this.isSuccess = true;
    }, err=>{
      this.message = err.error.message;
      this.isError = true;
      this.isSuccess = false;
    })
  }
}
