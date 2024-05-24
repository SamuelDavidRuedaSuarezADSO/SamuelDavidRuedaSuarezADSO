/*
3. Crear una función map que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• obtenga el resultado
• lo pushee a un nuevo array
• devuelva el array final con el resultado de cada una de las llamadas al callback.
*/

const x = (array) => {
  return array - 2
}
let array = [2, 1, 5, 3, 4, 2, 3];
respuesta = array.map(x);
console.log(respuesta);

//crea una nueba matriz con los que cumplen la condicion del array original