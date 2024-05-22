/*
21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
Promise.allSettled() para obtener información sobre el estado de todas las Promises.
*/

const prom1 = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
});
const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error: promesa 2'), 2000);
});
const prom3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 1500);
});

Promise.allSettled([prom1, prom2, prom3]).then((res) => {
  console.log('Estado de las promesas:', res)
})