/*
19. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
luego manipule los datos recibidos para mostrar información específica.
*/

(async () => {
  try {
    let response = await fetch('19.json');
    let data = await response.json();

    const filtro = data.filter(item => item.name.startsWith('A'));

    console.log(filtro)

    const nombresAlReves = filtro.map(item => {
      return {
        ...item,
        name: item.name.split('').reverse().join('')
      };
    });

    console.log(nombresAlReves);
  } catch (error) {
    console.error('Error:', error);
  }
})();