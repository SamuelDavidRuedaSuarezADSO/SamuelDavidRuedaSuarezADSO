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
  return x == "3";
})

console.log(res)
// si son dos iguales devuele tru si es string con un numero adentro en este caso, pero si son tre son.
// devuelve la pocion de atrivuto que cumple la condicion si no hay ninguno devuelve -1