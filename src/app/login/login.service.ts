import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { CookieService } from "ngx-cookie-service";

@Injectable()
 
export class LoginService {
  Token: string | undefined;
  
  constructor(private router: Router, private cookies:CookieService) {}



  login(username: string, password: string, userType: string) {
    
    firebase.auth().signInWithEmailAndPassword(username, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.Token = token;
            this.cookies.set("token", this.Token)
            this.router.navigate(['/main']);
          }
        ).catch(
          error => {
            console.error('Error al obtener el token:', error);
          
          }
        );
      }
    ).catch(
      error => {
        console.error('Error al iniciar sesión:', error);
       
      }
    );
  }

  getIdToken() {
    //return this.Token;
    return this.cookies.get("token");
  }
  estalogeado(){
    
     return this.cookies.get("token");


  }
  logout(){
    firebase.auth().signOut().then(()=>{
      this.Token='';
      this.cookies.set("token", this.Token)
      this.router.navigate(['/logout'])
      window.location.reload


    })
  }
}
