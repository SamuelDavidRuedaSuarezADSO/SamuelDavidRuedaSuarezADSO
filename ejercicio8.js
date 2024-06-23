/*
. Crear una función findIndex que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el índice del elemento pasado como argumento del primer callback que
devuelva true
• sí ningún callback devuelve true, devuelva undefined
*/

// Declara una variable 't' y la inicializa con un arreglo de números.
let t = [1, 2, 3, 4];

// Usa el método 'findIndex' del arreglo 't' para encontrar el índice del primer elemento que cumple con una condición.
// El método 'findIndex' toma una función de retorno (callback) que se aplica a cada elemento del arreglo 't'.
let res = t.findIndex((x) => {
  // Verifica si el elemento 'x' es igual a "3" (cadena de texto).
  // La comparación 'x == "3"' es sensible al tipo de dato, por lo que solo coincidirá si 'x' es una cadena "3".
  // La función de retorno devuelve 'true' si 'x' es igual a "3", y 'false' en caso contrario.
  return x == "3";
});

// Imprime el índice del primer elemento de 't' que cumple la condición, o '-1' si ninguno cumple.
console.log(res);

// si son dos iguales devuele tru si es string con un numero adentro en este caso, pero si son tre son.
// devuelve la pocion de atrivuto que cumple la condicion si no hay ninguno devuelve -1