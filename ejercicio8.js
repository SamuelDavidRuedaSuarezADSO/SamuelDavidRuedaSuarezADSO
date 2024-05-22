/*
. Crear una función findIndex que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el índice del elemento pasado como argumento del primer callback que
devuelva true
• sí ningún callback devuelve true, devuelva undefined
*/

let t = [1, 2, 3, 4];

let res = t.findIndex((x) => {
  return x == "4";
})

console.log(res)