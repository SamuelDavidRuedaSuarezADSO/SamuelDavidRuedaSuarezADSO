/*
19. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
luego manipule los datos recibidos para mostrar información específica.
*/

// Creamos una unción autoejecutable asíncrona (IIFE) para ejecutar código asíncrono
(async () => {
  try {
    // Se realiza una solicitud HTTP GET a '19.json' y se espera a que la respuesta se resuelva
    let response = await fetch('19.json');
    
    // Se espera a que el cuerpo de la respuesta se convierta a formato JSON
    let data = await response.json();

    // Filtra los elementos cuyo atributo 'name' comienza con la letra 'A'
    const filtro = data.filter(item => item.name.startsWith('A'));

    // Imprime en la consola los elementos filtrados
    console.log(filtro);

    // Transforma los nombres de los elementos filtrados invirtiendo el orden de las letras
    const nombresAlReves = filtro.map(item => {
      return {
        ...item,
        name: item.name.split('').reverse().join('') // Invierte el nombre
      };
    });

    // Imprime en la consola los nombres invertidos
    console.log(nombresAlReves);
  } catch (error) {
    // Captura cualquier error ocurrido durante el proceso y lo imprime en la consola
    console.error('Error:', error);
  }
})();
