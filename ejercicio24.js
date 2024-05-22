/*
24. Crear un objeto proxy usando la clase Proxy
*/

let obj = {
  nombre: "Samuel",
  edad: 20
};

let handler = {
  get: function (target, prop) {
    console.log(`Leyendo propiedad: ${prop}`);
    return prop in target ? target[prop] : `La propiedad ${prop} no existe`
  },
  set: function (target, prop, value) {
    console.log(`Escribiendo propiedad: ${prop} con valor: ${value}`);
    target[prop] = value;
    return true;
  },
  deleteProperty: function (target, prop) {
    console.log(`Eliminando propiedad: ${prop}`);
    if (prop in target) {
      delete target[prop];
      return true
    }
    return false;
  }
};

let proxy = new Proxy(obj, handler);

console.log(proxy.nombre);

proxy.edad = 18;
console.log(proxy.edad);