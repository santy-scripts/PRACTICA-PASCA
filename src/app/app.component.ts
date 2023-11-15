// app.component.ts
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private loginservice:LoginService){}
  title = 'mi-tienda-agricola';
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCsVtZzZCvkWeyIPF3Bs9uN_c-wGt_fHRY",
      authDomain: "bd-tiendavirtual.com",

    });
  }
  estaLogeado(){
    return this.loginservice.estalogeado();
  }
  logout(){
    return this.loginservice.logout();
  }
}
