import type { Producto } from './types';

export const carrito = $state({
  items: [] as Producto[],
});

export function agregar(producto: Producto) {
  // 🟢 PASO 3: agrega el producto si no está repetido
}

export function quitar(id: number) {
  // 🟢 PASO 3: quita el producto cuyo id coincida
}
