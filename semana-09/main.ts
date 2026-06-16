interface IPelicula {
    nombre: string;
    categoria: string;
    tiempo: number;
}

const misPeliculas: IPelicula[] = [
    { nombre: "It", categoria: "Terror", tiempo: 135 },
    { nombre: "Avengers", categoria: "Acción", tiempo: 181 },
    { nombre: "Obsesión", categoria: "Drama", tiempo: 110 }
];

/**
 * Función que busca películas usando un ciclo manual
 */
const obtenerTerror = (catalogo: IPelicula[]): IPelicula[] => {
    // 1. Creamos un arreglo vacío para guardar los resultados
    const peliculasEncontradas: IPelicula[] = [];

    // 2. Recorremos el catálogo película por película
    // Nota: 'iPelicula' es la interfaz (el molde), recorremos 'catalogo' (los datos)
    for (const pelicula of catalogo) {
        // 3. Comparamos si la categoría coincide (ojo con las mayúsculas/minúsculas)
        if (pelicula.categoria === "Terror") {
            // 4. Si coincide, la agregamos al nuevo arreglo usando el método .push()
            peliculasEncontradas.push(pelicula);
        }
    }

    // 5. Al terminar todo el ciclo, devolvemos la lista con los aciertos
    return peliculasEncontradas;
};


// Llamamos a la función
const soloTerror = obtenerTerror(misPeliculas);
console.log(soloTerror); // Muestra "It" y "El Conjuro" (.log)

const totalmin=misPeliculas.reduce((acumulador,P)=> acumulador + P.tiempo,0)  // para ver cuanto se demora uno en ver las peliculas en total.


const nombres:string[]=["It", "Avengers", "Obsesión"];


function obtenerPrimeraPelicula(lista: string[]): string {
    if (lista.length === 0) {
        return "El arreglo está vacío";
    }
    
    return lista[0]; // Acceso al índice cero
}

// Se invoca exactamente igual:
const primera = obtenerPrimeraPelicula(["It", "Avengers"]);

function obtenerPrimeraPeliculaObjeto(PrimerPelicula: IPelicula[]): IPelicula {
    // Accedemos a la posición cero del arreglo de objetos
    return PrimerPelicula[0];
}


//lo que hizo mateo
function obtenerPrimerElemento<T> (array_elegida:T[]):T{}
const pp=obtenerPrimerElemento<string>(nombres);


function cargar(){
    const respuesta=fetch("./peliculas.JSON")
    const datos=respuesta.JSON() //todavia los datos no ha cargado los datos del archivo json a acá. es no bloqueantes. se usa el async/await para pasar a bloqueantes
}

async function cargar(){
    const respuesta=await fetch("./peliculas.json");
    const datos=await respuesta.JSON()  //así
}


type estadoDeCarga<T>{
    {estado:'cargando'};
    {estado: 'error',mensaje:string};
    {estado:'completo',datos:T}
}

fuction DescribirEstado(Estado:estadoDeCarga<Pelicula[]>){
    switch Estado.estado:
    case 'cargando':
    case 'error':
    case 'completo':

}

