/*
23. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
try/catch para mostrar un mensaje de error en caso de fallo.
*/
// Este código es una función asincrónica autoinvocada que realiza una búsqueda de nombres
// en un archivo JSON llamado '18.json'. primero intenta obtener el archivo JSON usando
// la función fetch y luego parsea la respuesta como JSON. Luego filtra los datos buscando
// aquellos cuyos nombres empiezan con la letra "s". Si no encuentra ningún nombre que
// comience con "s", lanza un error. Finalmente, imprime por consola los resultados del
// filtro.

(async () => {
  try {
    let response = await fetch('18.json');  // Intenta obtener el archivo JSON '18.json'
    let data = await response.json();       // Parsea la respuesta como JSON

    const filtro = data.filter(item => item.name.startsWith('s'));  // Filtra los datos por nombres que empiezan con 's'

    if (filtro.length === 0) {  // Si no se encontraron nombres que empiecen con 's', lanza un error
      throw new Error('No se encontraron nombres que comiencen con "s"');
    }

    console.log(filtro);  // Imprime por consola los resultados del filtro
  } catch (error) {
    console.error('Error:', error.message);  // Captura cualquier error y lo imprime por consola
  }
})();

