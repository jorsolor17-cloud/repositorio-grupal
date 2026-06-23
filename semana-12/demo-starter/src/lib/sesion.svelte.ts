// Estado global de la sesión (lo escribimos juntos en clase)
export const sesion = $state({
  usuario: null as string | null,
});

export function iniciarSesion(nombre: string) {
  // 🟢 PASO 2: asigna sesion.usuario = nombre
}

export function cerrarSesion() {
  // 🟢 PASO 2: vuelve sesion.usuario a null
}
