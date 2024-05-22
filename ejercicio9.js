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

let g = [2, 4, 34, 12, -1];

let callback = x => x % 2 == 0;

let resp = _.dropWhile(g, callback); // Fuciona siendo que eliminara y crea una matriz con los elementos que marque true hasta que encuentre uno que marque false aparti de guardara en la nueva matriz el resto.


console.log(`El array orignal `, g);
console.log(`La nueva matriz`, resp);