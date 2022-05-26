import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { Feedback } from 'src/app/feedback';
import { FeedbackService } from 'src/app/feedback.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  profileForm = this.fb.group({
    eventName: ['', Validators.required],
    eventEmail: ['', Validators.required],
    eventMsg: ['', Validators.required]
  })
  constructor(private fb: FormBuilder,private _userService:FeedbackService) { }

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
