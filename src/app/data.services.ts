import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Producto } from "./services/producto.service";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient,private loginService:LoginService){}

    cargarProductos(){
        const token=this.loginService.getIdToken();
        return this.httpClient.get('https://bd-tiendavirtual-default-rtdb.firebaseio.com/datos.json');
    }


    agregarProducto(productos:Producto[]){

        this.httpClient.put('https://bd-tiendavirtual-default-rtdb.firebaseio.com/datos.json',productos).subscribe(

           Response => console.log("El Producto se ha Agregado: " + Response),
            
            error => console.log("Error: " + error), 
            
        );
    }
}