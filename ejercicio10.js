/*
Crear una función takeWhile que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva un array con los elementos hasta el primer callback que devolvió false
• (Inverso del dropWhile)
*/

// Importa la biblioteca 'underscore-contrib' utilizando 'require'.
const _ = require('underscore-contrib');

// Define un arreglo 'p' que contiene varios números, incluyendo pares e impares.
let p = [2, 4, 8, 22, 3, 34];

// Define una función de callback 'ayuda' que verifica si un número es par.
// Esta función es una función flecha que toma un parámetro 'x' y devuelve 'true' si 'x' es par, 'false' si no lo es.
let ayuda = x => x % 2 == 0;

// Usa el método 'takeWhile' de underscore-contrib para crear una nueva matriz 'respu'.
// El método 'takeWhile' toma elementos del arreglo 'p' mientras la función de callback 'ayuda' devuelva 'true'.
let respu = _.takeWhile(p, ayuda);

// Imprime el arreglo original 'p' en la consola.
console.log(`Array original: `, p);

// Imprime la nueva matriz 'respu' que contiene los elementos tomados hasta que 'ayuda' devuelve 'false'.
console.log(`Matriz final: `, respu);
