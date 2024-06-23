/*
18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
mostrar solo los nombres que comiencen con "A")
*/

// Utiliza la función 'fetch' para realizar una solicitud GET a '18.json'
fetch('18.json')
  // El primer 'then' maneja la respuesta de la solicitud
  .then(response => {
    // Convierte la respuesta a JSON y devuelve otra promesa
    return response.json();
  })
  // El siguiente 'then' maneja los datos obtenidos del JSON
  .then(data => {
    // Filtra los datos para obtener aquellos cuyo nombre empieza con 'A'
    const filtro = data.filter(item => item.name.startsWith('A'));
    
    // Imprime en la consola los datos filtrados
    console.log(filtro);
  });
