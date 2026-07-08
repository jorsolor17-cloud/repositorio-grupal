import type { Producto, productoNuevo } from './types';

const API_URL = import.meta.env.VITE_SUPABASE_URL;
const CLAVE=import.meta.env.VITE_SUPABASE_KEY;

const cabeceras = {
    apikey: CLAVE,
    authorization: `Bearer ${CLAVE}`,
    'Content-Type': 'application/json'
}


export async function obtenerProductos(): Promise<Producto[]> {
    const respuesta = await fetch(`${API_URL}/productos?select=*&order=id`, {
        headers: cabeceras
    });
    if (!respuesta.ok) {
        throw new Error(`Error al obtener productos: ${respuesta.statusText}`);
}
const data = await respuesta.json();
return data;
}
export async function obtenerProducto(id: number): Promise<Producto | null> {
    const respuesta = await fetch(`${API_URL}/productos?id=eq.${id}`, {
    });
    if (!respuesta.ok) {
        throw new Error(`Error al obtener producto con id ${id}: ${respuesta.statusText}`);
    }
    const lista: Producto[] = await respuesta.json();
    return lista[0] ?? null;
}

export async function crearProducto(producto: productoNuevo): Promise<void> {
    const respuesta = await fetch(`${API_URL}/productos`, {
        method: 'POST',
        headers: cabeceras,
        body: JSON.stringify(producto)
    });

    if (!respuesta.ok) {
        throw new Error(`Error al crear producto: ${respuesta.status} ${respuesta.statusText}`);
    }
}
export async function eliminarProducto(id: number): Promise<void> {
    const respuesta = await fetch(`${API_URL}/productos?id=eq.${id}`, {
        method: 'DELETE',
    });

    if (!respuesta.ok) {
        throw new Error(`Error al eliminar producto: ${respuesta.status} ${respuesta.statusText}`);
    }
}