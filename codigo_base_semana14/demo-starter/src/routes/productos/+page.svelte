<script lang="ts">
  import { goto } from '$app/navigation';
  import { agregar } from '$lib/carrito.svelte';
  import { formatearPrecio } from '$lib/calculos';

  let { data } = $props();
  const productos = $derived(data.productos ?? []);
</script>


<section>
  <h1>Productos</h1>
  <a href="/productos/nuevo" class="cta">Nuevo producto →</a>
  <ul>
    {#each productos as producto (producto.id)}
      <li>
        <span>{producto.nombre} — {formatearPrecio(producto.precio)}</span>
        <span class="acciones">
          <button onclick={() => goto(`/productos/${producto.id}`)}>Ver detalle</button>
          <button onclick={() => agregar(producto)}>Agregar</button>
        </span>
      </li>
    {/each}
  </ul>
</section>

<style>
  ul { list-style: none; padding: 0; }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #eee;
  }
  .acciones { display: flex; gap: 0.5rem; }
</style>
