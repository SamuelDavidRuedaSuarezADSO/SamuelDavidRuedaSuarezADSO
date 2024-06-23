/*
7. Crear una función find que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el elemento pasado como argumento del primer callback que devuelva true
• sí ningún callback devuelve true, devuelva undefined
*/

// Declara una variable 'r' y la inicializa con un arreglo de números.
let r = [10, 12, 15, 165, 8];

// Usa el método 'find' del arreglo 'r' para encontrar el primer elemento que cumple con una condición.
// El método 'find' toma una función de retorno (callback) que se aplica a cada elemento del arreglo 'r'.
console.log(
  r.find((x) => {
    // Verifica si el elemento 'x' es mayor o igual a 8.
    // Si 'x >= 8' es verdadero, la condición se cumple para ese elemento.
    // La función de retorno devuelve 'true' si 'x' es mayor o igual a 8, y 'false' en caso contrario.
    return x >= 8;
  })
); // Imprime el primer elemento de 'r' que cumple la condición, o 'undefined' si ninguno cumple.


// busca en el array en ORDEN un elemento que cumpla la condicion si noi hya ninguno imprime undefuine y si si devuelve el valor que cumple con la condicion