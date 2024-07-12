/*
25. Usar un proxy para la validación de los valores de propiedades
• Cuando declaremos que el atributo es numérico solo perimimos que ingresen
números
• Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
letras
• Cuando declaremos que el atributo es un email, solo permitimos que ingresen
correos
• Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
fechas
• Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
al final de estos y se debe mostrar el error personalizado por consola
*/



// Función que verifica si un valor es un número.
// Es una función nombrada que toma un parámetro: valor.
// Retorna un booleano.
function esNumero(valor) {
  return !isNaN(valor); // Retorna true si valor no es NaN (Not-a-Number), de lo contrario, retorna false.
}

// Función que verifica si un valor es alfanumérico.
// Es una función nombrada que toma un parámetro: valor.
// Retorna un booleano.
function esAlfanumerico(valor) {
  return /^[a-zA-Z]+$/.test(valor); // Retorna true si valor contiene solo letras (mayúsculas o minúsculas), de lo contrario, retorna false.
}

// Función que verifica si un valor tiene el formato de un email válido.
// Es una función nombrada que toma un parámetro: valor.
// Retorna un booleano.
function esEmail(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor); // Retorna true si valor tiene el formato de un email, de lo contrario, retorna false.
}

// Función que verifica si un valor tiene el formato de una fecha válida.
// Es una función nombrada que toma un parámetro: valor.
// Retorna un booleano.
function esFecha(valor) {
  return !isNaN(Date.parse(valor)); // Retorna true si valor puede ser convertido a una fecha válida, de lo contrario, retorna false.
}

// Función que verifica si un valor tiene espacios en blanco al principio o al final.
// Es una función nombrada que toma un parámetro: valor.
// Retorna un booleano.
function tieneEspacios(valor) {
  return valor.startsWith(' ') || valor.endsWith(' '); // Retorna true si valor empieza o termina con un espacio en blanco, de lo contrario, retorna false.
}

// Creación de un objeto llamado handler con un método: set.
let handler = {
  // Método set: Se ejecuta cuando se intenta escribir una propiedad del objeto.
  // Es una función nombrada que toma tres parámetros: target, prop y value.
  set: function (target, prop, value) {
    // Verifica si el valor tiene espacios en blanco al principio o al final.
    if (tieneEspacios(value)) {
      console.error(`Error: La propiedad '${prop}' no debe tener espacios en blanco al principio o al final.`);
      return false; // Retorna false si el valor tiene espacios en blanco al principio o al final.
    }
    // Switch para verificar el tipo de la propiedad según target.tipos[prop].
    switch (target.tipos[prop]) {
      case 'numero':
        if (!esNumero(value)) {
          console.error(`Error: La propiedad '${prop}' debe ser un número.`);
          return false; // Retorna false si el valor no es un número.
        }
        break;
      case 'alfanumerico':
        if (!esAlfanumerico(value)) {
          console.error(`Error: La propiedad '${prop}' debe ser alfanumérica.`);
          return false; // Retorna false si el valor no es alfanumérico.
        }
        break;
      case 'email':
        if (!esEmail(value)) {
          console.error(`Error: La propiedad '${prop}' debe ser un email válido.`);
          return false; // Retorna false si el valor no tiene el formato de un email válido.
        }
        break;
      case 'fecha':
        if (!esFecha(value)) {
          console.error(`Error: La propiedad '${prop}' debe ser una fecha válida.`);
          return false; // Retorna false si el valor no puede ser convertido a una fecha válida.
        }
        break;
      default:
        console.error(`Error: Tipo de propiedad desconocido para '${prop}'.`);
        return false; // Retorna false si el tipo de la propiedad es desconocido.
    }

    target[prop] = value; // Asigna el valor a la propiedad del objeto.
    return true; // Retorna true para indicar que la operación de escritura fue exitosa.
  }
};

// Creación de un objeto llamado objetoOriginal con tipos y propiedades inicializadas en null.
let objetoOriginal = {
  tipos: {
    edad: 'numero', // Define que la propiedad 'edad' debe ser un número.
    nombre: 'alfanumerico', // Define que la propiedad 'nombre' debe ser alfanumérica.
    correo: 'email', // Define que la propiedad 'correo' debe ser un email.
    fechaNacimiento: 'fecha' // Define que la propiedad 'fechaNacimiento' debe ser una fecha.
  },
  edad: null, // Inicializa la propiedad 'edad' en null.
  nombre: null, // Inicializa la propiedad 'nombre' en null.
  correo: null, // Inicializa la propiedad 'correo' en null.
  fechaNacimiento: null // Inicializa la propiedad 'fechaNacimiento' en null.
};

// Creación de un proxy llamado proxy para el objeto objetoOriginal con el handler especificado.
// Un proxy es un objeto que envuelve a otro objeto y puede interceptar y redefinir operaciones fundamentales.
let proxy = new Proxy(objetoOriginal, handler);

// Asignación de valores a las propiedades del proxy.
proxy.edad = "18"; // Establece la propiedad 'edad' a "18" (convertido a número por la validación).
proxy.nombre = "Samuel"; // Establece la propiedad 'nombre' a "Samuel".
proxy.correo = "sampuerta247@correo.com"; // Establece la propiedad 'correo' a "sampuerta247@correo.com".
proxy.fechaNacimiento = "2004/06/15"; // Establece la propiedad 'fechaNacimiento' a "2004/06/15".

// Impresión de los valores de las propiedades del proxy.
console.log(proxy.edad); // Imprime 18.
console.log(proxy.nombre); // Imprime "Samuel".
console.log(proxy.correo); // Imprime "sampuerta247@correo.com".
console.log(proxy.fechaNacimiento); // Imprime "2004/06/15".

// Intento de asignar valores no válidos a las propiedades del proxy.
proxy.edad = "veinticinco"; // Error: La propiedad 'edad' debe ser un número.
proxy.nombre = "1234"; // Error: La propiedad 'nombre' debe ser alfanumérica.
proxy.correo = "correo@incorrecto"; // Error: La propiedad 'correo' debe ser un email válido.
proxy.fechaNacimiento = "fecha"; // Error: La propiedad 'fechaNacimiento' debe ser una fecha válida.
