/*
7. Crear una función find que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el elemento pasado como argumento del primer callback que devuelva true
• sí ningún callback devuelve true, devuelva undefined
*/

let r = [10, 12, 15, 165, 8];

console.log(
  r.find((x) => {
    return x > 10;
  })
)