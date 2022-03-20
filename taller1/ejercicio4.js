/* Forma 1
let sables = [
    {
        color : "amarillo",
        energia : 20,
        portador : "mateo"
    },

    {
        color : "verde",
        energia : 50,
        portador : "Obi wan"
    },

    {
        color : "rojo",
        energia : 22,
        portador : "karina"
    },

    {
        color : "azul",
        energia : 10,
        portador : "matias"
    },

    {
        color : "negro",
        energia : 50,
        portador : "juan"
    },

    {
        color : "gris",
        energia : 35,
        portador : "elmer"
    },

    {
        color : "plateado",
        energia : 25,
        portador : "lina"
    },

    {
        color : "blanco",
        energia : 60,
        portador : "laura"
    },

    {
        color : "morado",
        energia : 21,
        portador : "claudia"
    },

    {
        color : "cafe",
        energia : 80,
        portador : "luis"
    },

    {
        color : "dorado",
        energia : 150,
        portador : "jose"
    },

    {
        color : "rosado",
        energia : 120,
        portador : "gloria"
    },

    {
        color : "naranjado",
        energia : 8,
        portador : "maxi"
    },

    {
        color : "blanco",
        energia : 75,
        portador : "estefania"
    },

    {
        color : "rojo",
        energia : 72,
        portador : "daniela"
    },

    {
        color : "morado",
        energia : 20,
        portador : "alejo"
    },

    {
        color : "gris",
        energia : 100,
        portador : "daniel"
    },

    {
        color : "negro",
        energia : 45,
        portador : "manuela"
    },

    {
        color : "verde",
        energia : 30,
        portador : "daniel"
    },

    {
        color : "morado",
        energia : 50,
        portador : "yeferson"
    }

]

let filtrar = sables.filter(sable => (sable.eneria < 20));

console.log(filtrar);*/

//Forma 2

let color = [
            "negro",
            "azul",
            "verde",
            "blanco",
            "morado",
            "rojo",
            "naranja",
            "plateado",
            "gris",
            "Dorado"
];

let energia = [

        50,
        25,
        15,
        10,
        8,
        100,
        7,
        18,
        12,
        15
];

let portador = [

    "Finn",
    "Nodin",
    "Mateo",
    "Alexis",
    "ObiWan",
    "Bel-sun",
    "cristian",
    "emmanuel",
    "salvador",
    "maxi"
];

let sables = [];


for (let i = 0; i <= 10; i++) {
    
    let sable = {};
    sable.color = color[Math.floor(Math.random() * color.length)];
    sable.energia = energia[Math.floor(Math.random() * energia.length)];
    sable.portador = portador[Math.floor(Math.random() * portador.length)];

    sables.push(sable);
}


function contabilizarSables(objetos){

    let filtrar = objetos.filter(function(objeto){
        return (objeto.energia < 20);
    })

    console.log(filtrar);

    console.log(`El numero de sables con energia menor a 20 es de:  ${filtrar.length}`);
}

contabilizarSables(sables);
