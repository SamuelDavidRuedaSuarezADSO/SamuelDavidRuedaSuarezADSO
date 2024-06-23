/*
Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado.
 */

// setInterval

// Define la función 'recorre' que toma dos parámetros: 'n1' y 'n2'
function recorre(n1, n2) {
  // Declara una variable 'time' y la inicializa con el resultado de setInterval
  // setInterval ejecuta la función dada cada 1000 milisegundos (1 segundo)
  let time = setInterval(() => {
    // Imprime el valor actual de 'n1' en la consola
    console.log(n1);
    // Si 'n1' es igual a 'n2'
    if (n1 == n2) {
      // Limpia el intervalo para detener la ejecución repetida de la función
      clearInterval(time);
    }
    // Incrementa 'n1' en 1
    n1++;
  }, 1000);
}

// Declara la variable 'n1' y la inicializa con el valor convertido a entero del prompt
// prompt muestra un cuadro de diálogo que solicita al usuario ingresar un valor
let n1 = parseInt(prompt(`Ingrese el numero "desde":`));

// Declara la variable 'n2' y la inicializa con el valor convertido a entero del prompt
let n2 = parseInt(prompt(`Ingrese el numero "hasta":`));

// Llama a la función 'recorre' con los valores de 'n1' y 'n2' obtenidos del usuario
recorre(n1, n2);

// Define la función 'recorrer' que toma dos parámetros: 'n1' y 'n2'
function recorrer(n1, n2) {
  // Utiliza setTimeout para ejecutar la función 'activar' después de 1000 milisegundos (1 segundo)
  setTimeout(function activar() {
    // Imprime el valor actual de 'n1' en la consola
    console.log(n1);
    // Si 'n1' es menor que 'n2'
    if (n1 < n2) {
      // Vuelve a llamar a 'activar' después de 1000 milisegundos
      setTimeout(activar, 1000);
    }
    // Incrementa 'n1' en 1
    n1++;
  }, 1000)
}

// Llama a la función 'recorrer' con los valores de 'n1' y 'n2' obtenidos del usuario
recorrer(n1, n2);




