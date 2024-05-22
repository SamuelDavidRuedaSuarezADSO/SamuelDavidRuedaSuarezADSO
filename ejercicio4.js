/*
4. Crear una función filter que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• sí dicho callback devuelve true, pushea el elemento a un nuevo array
• devuelva el array final con los elementos que pasaron el "filtro"
*/
let y = ["banana", "frezasss", "uva"];

function filtro(y) {
  let x = y.filter((p) => p.length >= 6);
  console.log(x);
}

filtro(y)



console.log(
  y.filter((elemento) => { return elemento.length >= 6 })
);