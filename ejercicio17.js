/*
17. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
obtenidos en la consola.
*/

// Utiliza la función 'fetch' para realizar una solicitud GET a 'prueba.json'
fetch('prueba.json')
  // El método 'then' se encadena para manejar la respuesta de la solicitud
  .then(res => res.json())
  // El siguiente 'then' maneja los datos obtenidos después de convertir la respuesta a JSON
  .then(datos => console.log(datos));
