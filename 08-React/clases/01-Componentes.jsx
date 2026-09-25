// Clase 1: Componentes en React
// Un componente es una función que retorna elementos de React (JSX)
import React from 'react';

function Saludo(props) {
    return <h1>Hola, {props.nombre}</h1>;
}

export default Saludo;
