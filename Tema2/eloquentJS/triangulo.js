function triangulo(filas){
    for (let i = 1; i <= filas; i++){
        let line = "";
        for (let j = filas; j > i; j--){
            line += "#";
        }
        console.log(line);
    }
    
}

triangulo(7);

const roundTo = function(n, step) {
  let resto = n % step;
  return n - resto + (resto < step / 2 ? 0 : step);
};

console.log(roundTo(3.2, 0.5));
a = 20;
b = 2;
console.log(a >> b);

let saludo = function(){
    console.log("hello!");
}
console.log(saludo());