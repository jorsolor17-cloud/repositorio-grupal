<script lang="ts">
    import type {LineaFactura} from "./types"
    let {lineas, subtotal,iva,total}:
    {lineas:LineaFactura[],subtotal:number,iva:number,total:number}=$props();

    let totalItems = $derived(lineas.reduce((acc, l) => acc + l.cantidad, 0));
</script>

<section class="panel">
  <h2>Carrito ({totalItems})</h2>
    {#if lineas.length === 0}
      <p>Tu carrito está vacío.</p>
    {:else}
      <ul class="lista">
        {#each lineas as l (l.producto.id)}
        <li class="item">
          <span>{l.producto.nombre}</span>
          <span>{l.cantidad} x ${l.producto.precio.toFixed(2)}=</span>
          <span> ${(l.producto.precio * l.cantidad).toFixed(2)}</span>
        </li>
        {/each}
      </ul>
      
      <div class="totales">
        <span>Subtotal: ${subtotal.toFixed(2)}</span>
        <span>IVA: ${iva.toFixed(2)}</span>
        <span>Total: ${total.toFixed(2)}</span>
      </div>
    {/if}
</section>

<style>
  .panel { background:#fff; border-radius:12px; padding:1rem 1.25rem; box-shadow:0 1px 4px rgba(0,0,0,.08); }
  h2 { color:#1E2761; margin-top:0; }
</style>
