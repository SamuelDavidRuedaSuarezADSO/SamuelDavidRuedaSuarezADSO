/*
20. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.
*/

// Creasion de tres promesas que se resolveran despues de cierto tiempo
const prom1 = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000); // Resuelve con el valor 1 despues de 1000 milisegundos (1 segundo)
});

const prom2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 2000); // Resuelve con el valor 2 despues de 2000 milisegundos (2 segundos)
});

const prom3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 1500); // Resuelve con el valor 3 despues de 1500 milisegundos (1.5 segundos)
});

// Promise.all espera a que todas las promesas en el array se resuelban
Promise.all([prom1, prom2, prom3]).then((res) => {
  console.log('Todas las Promesas se han resuelto:', res); // Se ejecuta cuando todas las promesas se han resuelto
});
