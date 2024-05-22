/*
18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
mostrar solo los nombres que comiencen con "A")
*/

fetch('18.json')
  .then(response => {
    return response.json()
  })
  .then(data => {

    const filtro = data.filter(item => item.name.startsWith('A'));

    console.log(filtro)
  })

