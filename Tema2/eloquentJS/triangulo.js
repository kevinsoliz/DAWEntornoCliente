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