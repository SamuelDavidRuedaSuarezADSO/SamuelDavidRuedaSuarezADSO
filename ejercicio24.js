/*
24. Crear un objeto proxy usando la clase Proxy
*/

// Creación de un objeto llamado obj con dos propiedades: nombre y edad.
let obj = {
  nombre: "Samuel", // La propiedad "nombre" tiene el valor de cadena "Samuel".
  edad: 20          // La propiedad "edad" tiene el valor numérico 20.
};

// Creación de un objeto llamado handler con tres métodos: get, set y deleteProperty.
let handler = {
  // Método get: Se ejecuta cuando se intenta acceder a una propiedad del objeto.
  // Es una función nombrada (no anónima) que toma dos parámetros: target y prop.
  get: function (target, prop) {
    console.log(`Leyendo propiedad: ${prop}`); // Imprime en la consola la propiedad que se está leyendo.
    // Retorna el valor de la propiedad si existe en el objeto, de lo contrario, retorna un mensaje indicando que la propiedad no existe.
    return prop in target ? target[prop] : `La propiedad ${prop} no existe`
  },

  // Método set: Se ejecuta cuando se intenta escribir una propiedad del objeto.
  // Es una función nombrada que toma tres parámetros: target, prop y value.
  set: function (target, prop, value) {
    console.log(`Escribiendo propiedad: ${prop} con valor: ${value}`); // Imprime en la consola la propiedad y el valor que se están escribiendo.
    target[prop] = value; // Asigna el valor a la propiedad del objeto.
    return true; // Retorna verdadero para indicar que la operación de escritura fue exitosa.
  },

  // Método deleteProperty: Se ejecuta cuando se intenta eliminar una propiedad del objeto.
  // Es una función nombrada que toma dos parámetros: target y prop.
  deleteProperty: function (target, prop) {
    console.log(`Eliminando propiedad: ${prop}`); // Imprime en la consola la propiedad que se está eliminando.
    if (prop in target) {
      delete target[prop]; // Elimina la propiedad del objeto si existe.
      return true; // Retorna verdadero para indicar que la operación de eliminación fue exitosa.
    }
    return false; // Retorna falso si la propiedad no existe en el objeto.
  }
};

// Creación de un proxy llamado proxy para el objeto obj con el handler especificado.
// Un proxy es un objeto que envuelve a otro objeto y puede interceptar y redefinir operaciones fundamentales.
let proxy = new Proxy(obj, handler);

// Acceso a la propiedad "nombre" a través del proxy.
// Esto dispara el método get del handler.
console.log(proxy.nombre); // Imprime "Samuel" y "Leyendo propiedad: nombre" en la consola.

// Asignación de un nuevo valor a la propiedad "edad" a través del proxy.
// Esto dispara el método set del handler.
proxy.edad = 18;
console.log(proxy.edad); // Imprime 18 y "Escribiendo propiedad: edad con valor: 18" en la consola.
