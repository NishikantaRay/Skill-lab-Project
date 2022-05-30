import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { Bookdata } from 'src/app/bookdata';
import { BookdataService } from 'src/app/bookdata.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  profileForm = this.fb.group({
    eventTitle: ['', Validators.required],
    eventDesc: ['', Validators.required],
    eventGuest: ['', Validators.required],
    eventTpart: ['', Validators.required],
    eventStime: ['', Validators.required],
    eventEtime: ['', Validators.required],
    eventDate: ['', Validators.required],
    eventVenue: ['', Validators.required],
    isApproved: ['Pending'],
  })
  constructor(private fb: FormBuilder,private _userService:BookdataService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.warn(this.profileForm.value);
    this._userService.registerfeed(this.profileForm.value).subscribe(Response=>{
      console.log(Response);
      this.message=Response.message;
      this.isSuccess=true;
      this.isError=false;
      },err=>{
        console.log(err);
        this.message=err.error.message;
        this.isSuccess=false;
        this.isError=true;
    })
  }
}
