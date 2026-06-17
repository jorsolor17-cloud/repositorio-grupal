<script lang="ts">
    import { onMount } from "svelte";
    import type { Producto,LineaFactura, Totales } from "./lib/types";
    import  Catalogo from "./lib/Catalogo.svelte";
    import Carrito from "./lib/Carrito.svelte";
    import {agregarProducto, calcularTotales} from "./lib/calculos";

    let productos = $state<Producto[]>([]);
    let cargando = $state(true);
    let error = $state("");
    let lineas = $state<LineaFactura[]>([]);
    let totales = $derived(calcularTotales(lineas));

    function onAgregar(producto: Producto){
      lineas= agregarProducto(lineas, producto);
    }

    function vaciar() {
      lineas = [];
    }

    onMount(async () => {
      try {
        const response = await fetch ("/productos.json");
        if(!response.ok){
          throw new Error ("Error al cargar los productos");
        }
        productos = await response.json();
      }
      catch(error){
        error = (error as Error).message;
      }
      finally{
        cargando = false;
      }
    });

    

</script>

<main>
  <h1>🧾 Mini Facturador — Svelte 5</h1>
  <button onclick={vaciar}>Vaciar carrito</button>
  {#if cargando}
    <p class="aviso">Cargando...</p>
  {:else if error}
    <p class="aviso">Error: </p>
  {:else}

  <div class="layaout">
    <Catalogo {productos} onAgregar={ onAgregar}/>
    <Carrito {lineas}
      subtotal={totales.subtotal}
      iva={totales.iva}
      total={totales.total}
      />
    </div>
  {/if}
</main>

<style>
  main { max-width: 860px; margin: 2rem auto; padding: 0 1rem; font-family: system-ui, sans-serif; }
  h1 { color: #1E2761; }
  .aviso{color : #f00;}
</style>
