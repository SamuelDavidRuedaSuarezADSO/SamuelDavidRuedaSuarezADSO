/*
14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
diga "Operación completada". Utiliza async/await
*/

async function operacion() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return "Operacion completada"
}

async function ejecutar() {
  const res = await operacion()
  console.log(res)
}

ejecutar();