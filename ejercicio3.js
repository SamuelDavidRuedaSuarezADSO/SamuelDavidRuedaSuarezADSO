/*
3. Crear una función map que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• obtenga el resultado
• lo pushee a un nuevo array
• devuelva el array final con el resultado de cada una de las llamadas al callback.
*/

// Define una función flecha 'x' que toma un argumento 'array'.
// Esta función intenta restar 2 del argumento 'array'.
const x = (array) => {
  return array - 2;
};

// Declara una variable 'array' y la inicializa con un arreglo de números.
let array = [2, 1, 5, 3, 4, 2, 3];

// Usa el método 'map' del arreglo, que aplica la función 'x' a cada elemento del arreglo 'array'.
// El resultado se almacena en la variable 'respuesta'.
respuesta = array.map(x);

// Imprime el contenido de 'respuesta' en la consola.
console.log(respuesta);


//crea una nueba matriz con los que cumplen la condicion del array original