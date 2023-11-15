import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { CompradorComponent } from './components/comprador/comprador.component';
import { LoginComponent } from './login/login.component';
import { DataServices } from './data.services';
import {HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { LogoutComponent } from './logout/logout.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';
import { NgxWhastappButtonModule } from "ngx-whatsapp-button";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VendedorComponent,
    CompradorComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    HttpClientModule,
    
    RouterModule.forRoot([
      
      { path: 'logout', component: LogoutComponent },
      { path: 'main', component: MainComponent },
      { path: 'vendedor', component: VendedorComponent, canActivate:[LoginGuardian] },
      { path: 'comprador', component: CompradorComponent, canActivate:[LoginGuardian] },
      { path: 'login', component: LoginComponent },
      
      
    ])

  ],
  providers: [DataServices, LoginService, CookieService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
