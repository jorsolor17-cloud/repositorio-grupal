<script lang="ts">
    import { crearProducto } from '$lib/api';
    import { goto } from '$app/navigation';

    let nombre = $state('');
    let precio = $state(0);

    async function Crear() {
        if (!nombre || !precio) {
            return;
        }
        await crearProducto({ nombre, precio });
        goto('/productos');
    }
</script>

<section>
    <h1>Nuevo producto</h1>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" bind:value={nombre} />
    <label for="precio">Precio</label>
    <input type="number" id="precio" bind:value={precio} />
    <button onclick={Crear}>Crear</button>
</section>

<style>
    label {
        display: block;
    }
</style>
