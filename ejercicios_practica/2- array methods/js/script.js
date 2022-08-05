"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá utilizar los datos en formato JSON disponible
    en "data.js" para realizar los siguientes enunciados.
/*

/* 1 - Enunciado

- Levantar los datos data.js parseando el JSON, generando
una array de personas.
- Con el array anterior utilice el metodo filter para generar
un array de personas mayores o igual a 18 años.
- Imprimir en consola el array resultante.

*/
const personas = JSON.parse(personasJSON)
const personas1 = personas.filter(persona=>persona.edad>=18)
console.log(personas1);


/* 2 - Enunciado

- Con el array de personas filtradas (resultado del enunciado anterior)
utilice le método forEach para en cada iteración con cada persona
renderizar el nombre y edad de esa persona en el HTML.
- Agregue al HTML los elementos que crea necesario e utilice los
mecanismos que prefiera para agregar por cada persona el nombre y edad
en el HTML (es decir, generar el contenido de forma dinámica).

*/
 personas.forEach(persona => {
    console.log("Nombre:" + persona.nombre + "," +  "Edad:"  + persona.edad)
})
const parrafo = document.createElement('p');
const parrafo1 = document.createElement('p');
parrafo.innerText = "Listado de Personas"
parrafo1.innerText = personasJSON
document.body.appendChild(parrafo);
document.body.appendChild(parrafo1);


/* 3 - BONUS TRACK

- Si misión, en caso que decida aceptarla, es que la edad a filtrar
en el primer enunciado no sea un valor escrito en este script, sino
que sea un valor que se toma del HTML (un input).
- Que toda la acción de filtrado (enunciado 1) y renderizado (enunciado 2)
se dispare al presionar un botón en el HTML que usted agregue.

*/


const inputEdad = document.createElement("input");
    inputEdad.id = "idInput";
    inputEdad.name = "edad";
    inputEdad.placeholder = "Edad";
    inputEdad.type = "text";
    inputEdad.classList.add('edad');
    document.body.appendChild(inputEdad);
  
   
const button = document.createElement("button");
button.innerHTML = "Agregar";
document.body.appendChild(button);
button.onclick = () =>{
    const edad = inputEdad.value;
    console.log(edad);
    const personaEdad = edad.filter(edad=>{
        return edad
    });  
}


const button1 = document.createElement("button");
button1.innerHTML = "Filtrar y Renderizar";
document.body.appendChild(button1);
button1.onclick = () =>{
    const personas = JSON.parse(personasJSON)
const personas1 = personas.filter(persona=>persona.edad>=18)
console.log(personas1);

personas.forEach(persona => {
    console.log("Nombre:" + persona.nombre + "," +  "Edad:"  + persona.edad)
})
const parrafo = document.createElement('p');
const parrafo1 = document.createElement('p');
parrafo.innerText = "Listado de Personas"
parrafo1.innerText = personasJSON
document.body.appendChild(parrafo);
document.body.appendChild(parrafo1);
}