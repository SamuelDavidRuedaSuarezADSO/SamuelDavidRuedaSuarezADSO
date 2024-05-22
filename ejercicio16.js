/*
Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
y mostrar el resultado final
*/

function promesa(valor, retraso) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(valor);
    }, retraso);
  });
};
let num1;
let num2;
let num3;

promesa(1, 1000)
  .then((resultado1) => {
    console.log(resultado1);
    num1 = resultado1;
    return promesa(2, 1000);
  })
  .then((resultado2) => {
    console.log(resultado2);
    num2 = resultado2;
    return promesa(3, 1000);
  })
  .then((resultado3) => {
    console.log(resultado3);
    num2 = resultado3;
    const suma = num1 + num2 + num3;
    console.log('Suma:', suma);
  });