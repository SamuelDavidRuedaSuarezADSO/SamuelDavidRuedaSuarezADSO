/*
4. Crear una función filter que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• sí dicho callback devuelve true, pushea el elemento a un nuevo array
• devuelva el array final con los elementos que pasaron el "filtro"
*/
// Declara una variable 'y' y la inicializa con un arreglo de cadenas de texto.
let y = ["uva", "frezasss", "sssssss"];

// Define una función 'filtro' que toma un argumento 'y'.
// Esta función filtra los elementos de 'y' que tienen una longitud mayor o igual a 6 caracteres y los imprime.
function filtro(y) {
  // Usa el método 'filter' del arreglo, que aplica una función a cada elemento del arreglo 'y'.
  // La función de filtrado retorna verdadero si el elemento tiene una longitud mayor o igual a 6.
  let x = y.filter((p) => p.length >= 6);
  // Imprime el arreglo filtrado 'x' en la consola.
  console.log(x);
}

// Llama a la función 'filtro' con el arreglo 'y'.
// Esto imprimirá los elementos de 'y' que cumplen la condición de longitud mayor o igual a 6.
filtro(y); // ["frezasss", "sssssss"]

// Filtra y guarda en un nuevo arreglo los elementos que cumplen la condición de longitud mayor o igual a 6.
// Imprime directamente el resultado del filtrado en la consola.
console.log(
  y.filter((elemento) => {
    // La función de filtrado retorna verdadero si el elemento tiene una longitud mayor o igual a 6.
    return elemento.length >= 6;
  })
); // ["frezasss", "sssssss"]