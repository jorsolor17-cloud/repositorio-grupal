import type { Producto } from './types';

export const carrito = $state({
  items: [] as Producto[],
});

export function agregar(producto: Producto) {
 carrito.items.push (producto);
}

export function quitar(id: number) {
  carrito.items = carrito.items.filter((item) => item.id !== id);
}
