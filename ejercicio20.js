/*
20. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.
*/

const prom1 = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000)
})
const prom2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 2000)
})
const prom3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 1500)
})

Promise.all([prom1, prom2, prom3]).then((res) => {
  console.log('Todas las Promises se han resuelto:', res)
})