export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}



export type productoNuevo = Omit<Producto, 'id'>;