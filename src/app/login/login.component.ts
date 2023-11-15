// login.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';
  userType: string = '';
  constructor(private loginService:LoginService){

  }
  ngOnInit(): void {
    
  }
  login(form:NgForm){
    const username=form.value.username
    const password=form.value.password
    const userType=form.value.userType
    
    
    this.loginService.login(username, password,userType )
  }
}
