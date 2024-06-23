/*
21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
Promise.allSettled() para obtener información sobre el estado de todas las Promises.
*/

const prom1 = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000); // Resuelve la promesa con el valor 1 después de 1000 milisegundos (1 segundo)
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error: promesa 2'), 2000); // Rechaza la promesa con el mensaje 'Error: promesa 2' después de 2000 milisegundos (2 segundos)
});

const prom3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 1500); // Resuelve la promesa con el valor 3 después de 1500 milisegundos (1.5 segundos)
});

Promise.allSettled([prom1, prom2, prom3]).then((res) => {
  console.log('Estado de las promesas:', res); // Se ejecuta cuando todas las promesas han sido resueltas o rechazadas
});
