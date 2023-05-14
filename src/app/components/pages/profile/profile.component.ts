import { Component,OnInit } from '@angular/core';

import { Login } from "../../../shared/models/records";
import { AppServiceService } from 'src/app/services/app-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // Fetching all the login info from db
  logins: Login[] = [];

  constructor(private loginService:AppServiceService,activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>
    {
      if(params.id){
        this.logins = this.loginService.getDataById(params.id);
      }
      else{
        this.logins  = [];
      }
    });
  }

  ngOnInit(): void {

  }
}
