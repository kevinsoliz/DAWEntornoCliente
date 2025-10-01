let nombre = prompt("Introduce tu nombre");
let edad = prompt("Introduce tu edad");
let cualidad = "";

if (edad <= 12){
    cualidad += "niño";
}
else if (edad >= 13 && edad <= 17){
    cualidad += "adolescente";
}
else if (edad >= 18 && edad <= 64) {
   cualidad += "trabajador";
}
else {
   cualidad += "jubilado";
}

console.log(`%c${nombre} tiene ${edad} años y por tanto es ${cualidad}.`, 'color: green; font-weight: bold;')