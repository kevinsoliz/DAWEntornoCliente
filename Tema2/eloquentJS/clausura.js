let local = 2;



function multplier(factor){
    return function otraFuncion(number){
        return number * factor;
    }
    
}

let doble = multplier(2);
console.log(doble(5));