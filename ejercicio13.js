/*
13. Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
resuelta" cuando se cumpla.
*/

// Crea una nueva promesa utilizando el constructor de Promises.
const promesa = new Promise((resolve, reject) => {
  // Dentro de la función de la promesa, se utiliza setTimeout para simular un retraso de 3 segundos.
  setTimeout(() => {
    // Después de 3 segundos, se resuelve la promesa con el mensaje "promesa resulta".
    resolve("promesa resulta");
  }, 3000); // El tiempo de espera es de 3000 milisegundos (3 segundos).
});

// Llama al método 'then' en la promesa, que se ejecuta cuando la promesa se resuelve correctamente.
promesa.then((resultado) => {
  // Imprime el resultado obtenido cuando la promesa se resuelve.
  console.log(resultado);
});
