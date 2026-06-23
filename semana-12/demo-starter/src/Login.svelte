<script lang="ts">
  import {sesion, iniciarSesion, cerrarSesion} from './lib/sesion.svelte'

let nombre= $state('');

function entrar() {
  if (nombre.trim() === '' && nombre .trim() === null) {
    iniciarSesion(nombre);
  }
  nombre = '';
  }

  </script>
  {#if sesion.usuario}
    <p>Bienvenido, {sesion.usuario}!</p>
    <button onclick={cerrarSesion}>Cerrar sesión</button>
  {:else}
    <div class="login">
  
        <input type="text" bind:value={nombre} placeholder="Ingrese su nombre" required/>
        <button onclick={entrar}>Iniciar sesión</button>
    </div>
  {/if}