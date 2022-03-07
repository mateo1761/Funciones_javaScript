//Funcion tradicional 

/*
function calcularDistacia(x1,x2,y1,y2){

    let restarX = x2 - x1;

    let restarY = y2 - y1;

    let cuadradoX = Math.pow(restarX , 2);

    let cuadradoY = Math.pow(restarY , 2);

    let suma = cuadradoX + cuadradoY;

    let resultado = Math.sqrt( Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

    return resultado;
}

let final = calcularDistacia(4,3, -10, -10);
console.log("La distancia es: " + final.toFixed(2));*/

//Funcion flecha 

let calcularDistacia = (x1,y1,x2,y2) => Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

let final = calcularDistacia(2,8, -10, -10);
console.log("La distancia es: " + final.toFixed(2));