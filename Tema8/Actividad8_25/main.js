import {suma, media} from './operaciones.js';

//chunk es un método de lodash divide un array en grupos de la cantidad que se escoja.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [ grupo1, grupo2, grupo3 ] = _.chunk(numeros, 3);
console.log("Total del primer grupo:" + suma(grupo1));
console.log("Total del segundo grupo:" + suma(grupo2));
console.log("Total del tercer grupo:" + suma(grupo3));

console.log("Media del primer grupo: " + media(grupo1));
console.log("Media del segundo grupo: " + media(grupo2));
console.log("Media del tercer grupo: " + media(grupo3));


