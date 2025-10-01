let nombre = prompt("Introduce tu nombre");
let edad = prompt("Introduce tu edad");

if (edad <= 12){
    console.log(`%c${nombre} tiene ${edad} años y por tanto es niño`, 'color: green; font-weight: bold;')
}
else if (edad >= 13 && edad <= 17){
    console.log(`%c${nombre} tiene ${edad} años y por tanto es adolescente`, 'color: green; font-weight: bold;')
}
else if (edad >= 18 && edad <= 64) {
    console.log(`%c${nombre} tiene ${edad} años y por tanto es trabajador`, 'color: green; font-weight: bold;')
}
else {
    console.log(`%c${nombre} tiene ${edad} años y por tanto es jubilado`, 'color: green; font-weight: bold;')
}