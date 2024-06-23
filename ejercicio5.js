/*
Crear una función every que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si todas las llamadas al callback devolvieron true
*/
// Declara una variable 'w' y la inicializa con un arreglo de números.
let w = [2, 4, 6, 8, 10];

// Usa el método 'every' del arreglo 'w' para verificar si todos los elementos cumplen con una condición.
// El método 'every' toma una función de retorno (callback) que se aplica a cada elemento del arreglo 'w'.
console.log(
  w.every((x) => {
    // Verifica si el elemento 'x' es divisible por 2 (es decir, si 'x' es un número par).
    // Si 'x % 2 == 0' es verdadero, la condición se cumple para ese elemento.
    // La función de retorno devuelve 'true' si 'x' es divisible por 2, y 'false' en caso contrario.
    return x % 2 == 0;
  })
); // Imprime 'true' si todos los elementos de 'w' cumplen la condición, 'false' en caso contrario.


// todos los elementos de el array tiene que cumplir con la condicion de lo contrario devuelce false