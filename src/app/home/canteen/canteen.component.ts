import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { Canteendata } from 'src/app/canteendata';
import { CanteendataService } from 'src/app/canteendata.service';
@Component({
  selector: 'app-canteen',
  templateUrl: './canteen.component.html',
  styleUrls: ['./canteen.component.css']
})
export class CanteenComponent implements OnInit {

  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  profileForm = this.fb.group({
    eventTitle: ['', Validators.required],
    eventTpart: ['', Validators.required],
    eventFchoice: ['Veg'],
    eventMenu: ['', Validators.required],
    eventMenuDetails: ['', Validators.required],
  })
  constructor(private fb: FormBuilder,private _userService:CanteendataService) { }

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
