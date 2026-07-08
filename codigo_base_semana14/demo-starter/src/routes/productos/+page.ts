import { obtenerProductos } from '$lib/api';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async () => {
    const productos = await obtenerProductos();
    return { productos };
};


