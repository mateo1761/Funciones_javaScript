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

let filtrar = sables.filter(sable => (sable.energia < 20));

console.log(filtrar);