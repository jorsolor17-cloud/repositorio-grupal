type estadoDeCarga<T>{
    {estado:'cargando'};
    {estado: 'error',mensaje:string};
    {estado:'completo',datos:T}
}

fuction DescribirEstado(estado:estadoDeCarga<pelicula>)