/*
Crear una función every que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si todas las llamadas al callback devolvieron true
*/

let w = [2, 4, 7, 8, 10];


console.log(
  w.every((x) => {
    return x % 2 == 0; // verificacion si la condicion se cumple si devuelte (true) si no (false).
  })
)