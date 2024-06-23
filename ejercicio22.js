/*
22. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
lista de elementos uno por uno.
*/
//Creamos una función asincrónica (async) llamada proceso que acepta un parámetro 'x'

async function proceso(x) { 
  for (const y of x) { // Bucle for...of que itera sobre cada elemento 'y' del array 'x'
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 1000 milisegundos (1 segundo) antes de continuar con el siguiente elemento
    console.log('Procesando el elemento:', y); // Imprime un mensaje indicando que se está procesando el elemento actual 'y'
  }
}

const array = [1, 2, 3, 4, 5]; // Variable 'array' que contiene un array de números del 1 al 5
proceso(array); // Llama a la función proceso, iniciando el procesamiento de cada elemento del array
