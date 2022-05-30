import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(private _userService:UserService,private _router:Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmitForm(){
    this._userService.loginUser(this.profileForm.value).subscribe(response=>{
      // console.log(response);
      
      this.message=response.message;
      this.isSuccess=true;
      this.isError=false;
      localStorage.setItem('token',response.token);
      localStorage.setItem('userID',response.userData.id);
      localStorage.setItem('userName',response.userData.name);
      this._router.navigate(['/home']);
    },err=>{
      this.message=err.error.message;
      this.isSuccess=false;
      this.isError=true;
      
    })
  }
}
