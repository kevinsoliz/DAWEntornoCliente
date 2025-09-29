function triangulo(filas){
    for (let i = 1; i <= filas; i++){
        let line = "";
        let line2 = "";
        for( let j = filas - 1; j >= i; j--){
            line += ".";
            for(let k = 0; k < i ; k++){
                line2 += "#";
            }

        }
        line += line2;
        console.log(line);
        
    }
}

triangulo(7);