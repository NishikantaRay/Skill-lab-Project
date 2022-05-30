import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(private _userService:UserService,private fb: FormBuilder,) { }

  ngOnInit(): void {
  }
  onSubmitForm(){
    this._userService.registerUser(this.profileForm.value).subscribe(Response=>{
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
