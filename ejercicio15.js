/*
. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
"Error: Promise rechazada".
*/
// Crea una nueva promesa utilizando el constructor de Promises.
const promesa = new Promise((resolve, reject) => {
  // Utiliza setTimeout para simular un retraso de 2000 milisegundos (2 segundos).
  // Después de 2 segundos, se llama a 'reject' para rechazar la promesa con el mensaje "Error: promesa rechazada".
  setTimeout(() => {
    reject("Error: promesa rechazada");
  }, 2000);
});

// Utiliza el método 'catch' en la promesa para manejar el rechazo.
promesa.catch((resultado) => {
  // Imprime el mensaje de error recibido cuando la promesa es rechazada.
  console.log(resultado);
});
