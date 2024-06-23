/*
12.La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
promesas.
La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
después de ms milisegundos, para que podamos agregarle. then, así:
*/

// Define una función 'delay' que devuelve una promesa.
// La promesa se resuelve después de cierta cantidad de tiempo especificada por 'ms'.
function delay(ms) {
  return new Promise(resolve => {
    // Dentro de la promesa, se utiliza 'setTimeout' para esperar 'ms' milisegundos.
    // Una vez que se completa el tiempo, se llama a 'resolve', lo que marca la promesa como resuelta.
    setTimeout(resolve, ms);
  });
}

// Llama a la función 'delay' con un argumento de 3000 milisegundos (3 segundos).
// Cuando la promesa se resuelve (después de 3 segundos), se ejecuta la función en el método 'then'.
delay(3000).then(() => console.log("Se ejecuta despues de tres segudnos"));
