/*
17. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
obtenidos en la consola.
*/

fetch('prueba.json')
  .then(res => res.json())
  .then(datos => console.log(datos));
