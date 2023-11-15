// comprador.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa el módulo CommonModule
import { Producto, ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-comprador',
  templateUrl: './comprador.component.html',
  styleUrls: ['./comprador.component.css']
})
export class CompradorComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    // Obtener la lista de productos desde el servicio
    //this.productos = this.productoService.getProductos();

    // Obtener productos desde la base de datos
    this.productoService.obtenerProductos().subscribe(misProductos => {

      console.log(misProductos);

      this.productos = Object.values(misProductos);
    });

  }

  agregarAlCarrito(producto: Producto) {
    // Puedes construir el enlace de WhatsApp con un mensaje predefinido
    const mensaje = `Hola, estoy interesado en comprar el producto {{producto.nombre}. ¿Podrías proporcionarme más información?`;
    const enlaceWhatsApp = `https://wa.me/+573219182104/?text=Hola, estoy interesado en comprar un producto. ¿Podrías proporcionarme más información?`;

    // Redireccionar a WhatsApp
    window.location.href = enlaceWhatsApp;
  }
}
