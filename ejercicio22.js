/*
22. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
lista de elementos uno por uno.
*/

async function proceso(x) {
  for (const y of x) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Procesando el elemento:', y)
  }
}

const array = [1, 2, 3, 4, 5]
proceso(array)