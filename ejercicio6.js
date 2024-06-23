/*
Crear una función every que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si todas las llamadas al callback devolvieron true
*/

// Declara una variable 'q' y la inicializa con un arreglo de números.
let q = [1, 3, 5, 8];

// Usa el método 'some' del arreglo 'q' para verificar si al menos un elemento cumple con una condición.
// El método 'some' toma una función de retorno (callback) que se aplica a cada elemento del arreglo 'q'.
console.log(
  q.some((x) => {
    // Verifica si el elemento 'x' es divisible por 2 (es decir, si 'x' es un número par).
    // Si 'x % 2 == 0' es verdadero, la condición se cumple para ese elemento.
    // La función de retorno devuelve 'true' si 'x' es divisible por 2, y 'false' en caso contrario.
    return x % 2 == 0;
  })
); // Imprime 'true' si al menos un elemento de 'q' cumple la condición, 'false' en caso contrario.


// busca en el array por lo menos a uno de los elemntos de la condicion, si lo halla devuelve true