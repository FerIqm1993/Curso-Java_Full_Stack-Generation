// Ejercicio 1: Lista de Tareas
// Instrucción: Crea un componente que renderice una lista (ul) de 3 tareas estáticas usando un arreglo.
import React from 'react';

function TodoList() {
    const tareas = ['Aprender React', 'Hacer ejercicio', 'Leer un libro'];
    return (
        <div>
            <h2>Mis Tareas</h2>
            <ul>
                {tareas.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
        </div>
    );
}

export default TodoList;
