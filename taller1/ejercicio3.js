//Funcion tradicional
/*
let temperaturas = [10,50,60,20,5];

function luna(...temperaturas){

    let temperaturaMaxima = Math.max(...temperaturas);
    let temperaturaMinima = Math.min(...temperaturas);

    let promedio = (temperaturaMaxima + temperaturaMinima)/2;
    
    return (promedio);
}

console.log(`La temperatura promedio fue de: ${luna(...temperaturas)}`);*/

//Funcion flecha
let temperaturas = [10,50,60,20,5];

let luna = (...temperaturas) => {

    let temperaturaMaxima = Math.max(...temperaturas);
    let temperaturaMinima = Math.min(...temperaturas);

    let promedio = (temperaturaMaxima + temperaturaMinima)/2;
    
    return (promedio);
}

console.log(`La temperatura promedio fue de: ${luna(...temperaturas)}`);