<script lang="ts">
    import {calcularTotal, formatearPrecio} from './lib/calculos';
    import {carrito, quitar} from './lib/carrito.svelte';
    const total= $derived(calcularTotal (carrito.items));
</script>
<section>
  <h2>Carrito</h2>
  {#if carrito.items.length ===0}
    <p>El carrito está vacío</p>
  {:else}
    <ul>
      {#each carrito.items as item (item.id)}
        <li>
          {item.nombre} - {formatearPrecio(item.precio)}
          <button onclick={() => quitar(item.id)}>Quitar</button>
        </li>
    {/each}
    </ul>
    <p> <strong>Total: {formatearPrecio(total)}</strong></p>
  {/if}
</section>