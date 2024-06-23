/*
Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
y mostrar el resultado final
*/

// Definición de una función 'promesa' que devuelve una promesa que se resuelve después de cierto tiempo
function promesa(valor, retraso) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(valor); // Resuelve la promesa con el 'valor' después de 'retraso' milisegundos
    }, retraso);
  });
}

let num1;
let num2;
let num3;

// Ejecución encadenada de promesas con 'then'
promesa(1, 1000)
  .then((resultado1) => {
    console.log(resultado1); // Imprime el resultado de la primera promesa
    num1 = resultado1; // Asigna el resultado de la primera promesa a 'num1'
    return promesa(2, 1000); // Retorna una nueva promesa que se resolverá con el valor 2 después de 1000 milisegundos
  })
  .then((resultado2) => {
    console.log(resultado2); // Imprime el resultado de la segunda promesa
    num2 = resultado2; // Asigna el resultado de la segunda promesa a 'num2'
    return promesa(3, 1000); // Retorna una nueva promesa que se resolverá con el valor 3 después de 1000 milisegundos
  })
  .then((resultado3) => {
    console.log(resultado3); // Imprime el resultado de la tercera promesa
    num3 = resultado3; // Asigna el resultado de la tercera promesa a 'num3'
    const suma = num1 + num2 + num3; // Calcula la suma de num1, num2 y num3
    console.log('Suma:', suma); // Imprime la suma de los tres valores
  });
