// vendedor.component.ts
import { Component } from '@angular/core';
import { Producto, ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent {
  nuevoProducto = { nombre: '', precios: [{ unidad: 'libra', precio: 0 }], imagen: null, rutaImagen: null } as Producto;
  imagenPreview: string | ArrayBuffer | null = null;
  productos: Producto[] =[];

  constructor(private productoService: ProductoService) {}
  obtenerProductos() {
    this.productoService.obtenerProductos().subscribe(misProductos => {
      console.log(misProductos);
      // Asignar los productos obtenidos al array productos
      this.productos = Object.values(misProductos);
    });
  }
  agregarProducto() {
    this.productoService.agregarProducto(this.nuevoProducto);
    this.resetearFormulario();
  }

  cargarImagen(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenPreview = reader.result as string;
        this.nuevoProducto.imagen = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  agregarPrecio() {
    this.nuevoProducto.precios.push({ unidad: 'libra', precio: 0 });
  }

  private resetearFormulario() {
    this.nuevoProducto = { nombre: '', precios: [{ unidad: 'libra', precio: 0 }], imagen: null, rutaImagen: null } as Producto;
    this.imagenPreview = null;
  }
}