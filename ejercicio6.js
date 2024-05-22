/*
Crear una función every que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si todas las llamadas al callback devolvieron true
*/

let q = [1, 3, 5, 8];

console.log(
  q.some((x) => {
    return x % 2 == 0;
  })
)