/*
. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
"Error: Promise rechazada".
*/

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: promesa rechazada")
  }, 2000);
});

promesa.catch((resultado) => {
  console.log(resultado);
})
