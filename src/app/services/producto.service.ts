// producto.service.ts
import { Injectable } from '@angular/core';
import { DataServices } from '@app/data.services';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  nombre: string;
  precios: { unidad: string; precio: number }[];
  imagen: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private productos: Producto[] = [];
  private productosUrl = 'https://bd-tiendavirtual-default-rtdb.firebaseio.com/datos.json';

  constructor(private dataService: DataServices, private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl);
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
    this.dataService.agregarProducto(this.productos);
  }
}