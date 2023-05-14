import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Login } from "../../../shared/models/records"
import { AppServiceService } from 'src/app/services/app-service.service';

import { passwordValidator } from '../../../password-validator';
import { FormGroup,FormControl, ValidationErrors,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  // Fetching all the login info from db
  logins: Login[] = [];

  constructor(private loginService:AppServiceService){
    this.logins =  loginService.getData();
  }

  ngOnInit(): void {

  }

  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
    mobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),passwordValidator]),
  });

  loginSubmit(){
    console.log(this.loginForm.get("mobile")?.value);
  }

  get Name(): FormControl{
    return this.loginForm.get("userName") as FormControl;
  }
  get Mobile(): FormControl{
    return this.loginForm.get("mobile") as FormControl;
  }
  get Password(): FormControl{
    return this.loginForm.get("password") as FormControl;
  }

}
