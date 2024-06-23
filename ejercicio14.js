/*
14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
diga "Operación completada". Utiliza async/await
*/

// Define una función asíncrona 'operacion'.
async function operacion() {
  // Utiliza 'await' para esperar a que se resuelva una promesa que se completa después de 1000 milisegundos (1 segundo).
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // Después de esperar, retorna el string "Operacion completada".
  return "Operacion completada";
}

// Define otra función asíncrona 'ejecutar'.
async function ejecutar() {
  // Utiliza 'await' para esperar a que la función 'operacion' se complete y devuelva un resultado.
  const res = await operacion();
  
  // Una vez que 'operacion' se completa, imprime el resultado en la consola.
  console.log(res);
}

// Llama a la función 'ejecutar' para comenzar el proceso asíncrono.
ejecutar();
