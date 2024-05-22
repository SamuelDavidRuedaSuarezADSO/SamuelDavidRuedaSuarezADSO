/*
Crear una función takeWhile que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva un array con los elementos hasta el primer callback que devolvió false
• (Inverso del dropWhile)
*/

const _ = require('underscore-contrib');

let p = [2, 4, 8, 22, 3, 34];

let ayuda = x => x % 2 == 0;

let respu = _.takeWhile(p, ayuda);// Fuciona que recorrera el array agregando en la nueva matriz solo los que el resultado de true hasta que llegue uno que diga false y apartir ahi se rompe no agregara más

console.log(`Array originak`, p);
console.log(`Matriz final`, respu);