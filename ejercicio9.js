/*
9. Crear una función dropWhile que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva un array con los elementos a partir del primer callback que devolvió false
• (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
callback de true, no los agrega, cuando el callback da false por primera vez agrega
todos los elementos restantes a partir de dicho elemento inclusive)
*/

const _ = require('underscore-contrib');

// Importa la biblioteca 'underscore-contrib' utilizando 'require'. Esta biblioteca proporciona funciones adicionales para trabajar con arreglos en JavaScript.

// Creamos un arreglo 'g' con varios números, incluidos pares e impares.
let g = [2, 4, 34, 12, -1];

// Creamos una función de callback 'callback' que verifica si un número es par.
let callback = x => x % 2 == 0;

// Usa el método 'dropWhile' de underscore-contrib para crear una nueva matriz 'resp'
// eliminando elementos del arreglo 'g' mientras la función de callback 'callback' devuelva true.
let resp = _.dropWhile(g, callback);

// Imprime el arreglo original 'g'.
console.log(`El array original: `, g);

// Imprime la nueva matriz 'resp' que contiene los elementos restantes después de la eliminación.
console.log(`La nueva matriz: `, resp);
