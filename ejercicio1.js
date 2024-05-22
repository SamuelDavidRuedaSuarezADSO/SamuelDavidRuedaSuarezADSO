/*
Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado.
 */

// setInterval

function recorre(n1, n2) {
  let time = setInterval(() => {
    console.log(n1);
    if (n1 == n2) {
      clearInterval(time);
    }
    n1++;
  }, 1000);
}

// let n1 = parseInt(prompt(`Ingrese el numero "desde":`));
// let n2 = parseInt(prompt(`Ingrese el numero "hasta":`));

// recorre(n1, n2);


function recorrer(n1, n2) {
  setTimeout(function activar() {
    console.log(n1);
    if (n1 < n2) {
      setTimeout(activar, 1000);
    }
    n1++;
  }, 1000)
}

// recorrer(n1, n2);



